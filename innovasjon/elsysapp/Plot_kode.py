import numpy as np
import matplotlib.pyplot as plt
x = []
y = []
z = []
t = []

file_string = ""
with open("KJORING.TXT",'r') as file:
    file_string = file.read()

liste = file_string.split('\n')
for i in range(len(liste)):
    liste[i] = liste[i].split(',')

for i in liste:
    #print(i)
    if len(i) > 3:
        x.append(i[0])
        y.append(i[1])
        z.append(i[2])
        t.append(i[3])
x_snitt = np.zeros(int(len(x)/10+1))
y_snitt = np.zeros(int(len(x)/10+1))
z_snitt = np.zeros(int(len(x)/10+1))
t_snitt = np.zeros(int(len(x)/10+1))
teller = 0
index = 0
for i in range(len(x)):
    if teller >= 10:
        index +=1
        teller = 0
    x_snitt[index] += float(x[i])/10
    y_snitt[index] += float(y[i])/10
    z_snitt[index] += float(z[i])/10
    t_snitt[index] += float(t[i])/10/1000
    teller += 1
    x_snitt[index]
    y_snitt[index]
    z_snitt[index]
    t_snitt[index]
lastElementIndex = len(x_snitt)-1
# Removing the last element using slicing
x_snitt = x_snitt[:lastElementIndex]
y_snitt = y_snitt[:lastElementIndex]
z_snitt = z_snitt[:lastElementIndex]
t_snitt = t_snitt[:lastElementIndex]
plt.xlabel('S')
plt.ylabel('m/s^2')
x_snitt -= x_snitt[0]
y_snitt -= y_snitt[0]
z_snitt -= z_snitt[0]-9.81

for i in range(len(z_snitt)):
    z_snitt[i] = z_snitt[i]-9.81

z_snitt = np.around(z_snitt, 4)
x_snitt = np.around(x_snitt, 4)
y_snitt = np.around(y_snitt, 4)
#print(len(x_snitt))
#print(list(z_snitt))
with open("RESULTAT.TXT",'w') as file:
    file.write(str(list(x_snitt))+"\n")
    file.write(str(list(y_snitt))+"\n")
    file.write(str(list(z_snitt))+"\n")
    
plt.plot(t_snitt,x_snitt,label = 'X-axis',color = 'red')
plt.plot(t_snitt,y_snitt,label = 'Y-axis',color = 'blue')
plt.plot(t_snitt,z_snitt,label = 'Z-axis',color = 'green')
plt.legend()
plt.show()

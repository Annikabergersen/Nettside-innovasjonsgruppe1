//Variabler med den registrerte dataen
var z_akse = [0.0, 0.626, 0.144, 0.845, 0.472, 0.478, 0.532, -0.232, 0.077, -1.632, -2.834, -1.46, -1.453, -0.852, -0.142, 1.147, 0.561, 0.698, -0.412, 0.745, -1.071, 0.66, -0.134, 2.296, -0.321, 0.559, -1.064, 0.447, 1.27, -0.169, -1.685, 1.664, -1.247, 0.474, 0.75, -1.004, 0.533, 0.248, -0.334, 1.435, -0.024, -0.945, 1.664, -0.321, 0.751, 2.04, -0.351, 0.693, 1.83, -1.023, 0.612, 1.195, -0.79, 1.747, -0.256, 1.045, 1.075, -1.361, 1.417, 0.969, -0.499, 2.466, 0.474, -0.347, 1.253, 0.896, 0.799, 2.052, 0.196, -0.727, 1.49, 3.191, 3.395, -4.194, -4.082, -2.44, 6.219, 1.614, -0.442, 1.689, 0.139, 0.047, 1.033, 0.378, 1.765, -0.575, 0.314, 0.422, -0.16, 0.823, 1.0, 1.774, 1.063, 1.49, 0.43, -0.065, 0.675, 1.38, -0.155, 0.877, 1.074, 0.439, 1.588, -0.301, 2.163, 0.003, 1.569, 0.428, 1.353, 0.89, 1.144, 0.505, 0.847, 0.708, 1.403, 0.492, 1.168, 0.535, 1.344, 2.988, 0.245, 1.384, 1.345, 0.354, -0.188, 0.524, -1.017, 7.802, -3.218, -5.27, -2.473, 4.628, 2.037, 1.403, -0.356, 0.961, 0.981, 0.404, 1.762, 0.111, 0.453, 1.276, 0.591, 0.984, 0.843, 0.708, 0.947, 0.393, 0.523, 0.63, 1.289, 1.149, -0.905, 2.589, 1.307, -0.868, 3.016, 0.745, -0.265, 1.071, 1.29, -0.144, 2.927, 0.231, 0.163, 2.163, 0.236, 0.157, 3.036, -0.823, 0.611, 2.483, 1.494, -0.064, 1.188, 0.83, 0.134, 0.452, 1.218, 0.57, -0.077, 2.387, 0.956, -0.169, 1.97, 0.372, 0.634, 1.799, -0.297, 1.426, 1.257, -0.715, 2.014, 0.154, 0.932, 1.131, 0.549, 0.636, 1.788, 0.925, 0.504, 1.65, 1.014, 0.647, -0.456, 1.133, 0.725, 0.878, 0.526, 0.354, 1.497, 1.091, -0.141, 0.523]
var y_akse = [0.0, -0.007, 0.023, 0.189, -0.031, 0.031, 1.016, 1.039, 0.496, 0.673, 2.469, 2.487, 2.649, 1.555, -0.324, -2.745, -3.872, -3.597, -3.025, -3.202, -1.853, -1.586, -1.49, -2.446, -2.947, -3.342, -1.894, -1.702, -3.827, -2.511, -2.399, -3.518, -1.804, -1.939, -2.028, -0.595, -1.451, -2.81, -2.031, -2.423, -2.481, -1.506, -0.979, -1.645, -2.471, -4.109, -3.155, -2.527, -1.572, -1.816, -1.61, -1.133, -2.259, -3.05, -2.606, -3.072, -4.331, -2.2, -4.193, -3.969, -2.607, -4.873, -3.417, -1.388, -2.418, -3.652, -2.98, -2.119, -1.613, -4.583, -3.897, -5.119, -7.451, -0.19, 2.9, -2.587, -1.6, -1.412, -1.886, -0.708, 0.853, -1.039, 1.017, -1.308, -0.84, 2.065, 1.051, 1.409, -0.034, -1.061, -1.729, -2.611, -9.422, -5.155, -2.123, -1.411, -2.141, -2.087, -1.015, -1.902, -1.733, -1.434, -1.639, -3.313, -2.52, -1.914, -5.28, -3.584, -3.402, -1.775, -3.039, -3.561, -2.493, -0.945, -3.275, -2.493, -3.903, -2.181, -3.805, -7.516, -10.288, -2.682, -4.061, -8.567, -8.726, -8.818, -5.701, -7.691, -6.511, 3.17, -0.288, -3.432, -1.122, -2.976, -4.28, -3.51, -5.982, -4.888, -3.292, -1.794, -2.023, -3.665, 0.302, -3.167, -2.127, -0.802, -0.985, -0.767, -1.325, 0.139, -1.555, -2.465, -1.631, -3.734, -2.077, -2.089, -1.902, -2.291, -0.944, -2.46, -2.732, -2.203, -4.463, -3.344, -0.859, -3.657, -2.861, -2.567, -4.594, -4.848, -2.157, -3.927, -2.601, -0.21, -1.119, -0.596, -0.843, -2.18, -1.268, 0.262, -2.718, -3.489, -1.802, -3.633, -3.625, -0.887, -2.258, -2.096, -0.804, -2.222, -1.169, -0.679, -3.226, -2.237, -2.741, -1.527, -2.565, -1.984, -2.204, -2.304, -0.045, -0.12, -0.86, 0.037, -3.866, -4.08, -5.17, -4.179, -3.179, -4.35, -1.654, -1.066, -1.919, -1.778]

var x_akse = [0.0, 0.183, -0.059, 0.723, 0.041, 0.651, 1.987, -0.14, -2.464, -3.036, -1.904, -2.088, -1.19, -0.826, -1.1, -2.28, -1.099, 1.165, -0.328, -1.842, -0.302, -0.39, 1.516, -2.573, -0.448, -0.572, -1.719, -0.835, 0.208, -3.094, -1.266, -1.655, -1.762, -0.791, -2.43, -0.44, -2.288, -0.412, -1.536, -2.066, 0.296, 0.04, -1.489,
  0.767, 0.954, -2.577, 1.494, -0.667, -2.511, 0.727, 0.042, -2.411, 0.476, 0.588, -0.269, 0.312, 1.152, -0.55, -1.077, 1.564, -0.924, 0.586, 2.134, -0.427, -0.756, 1.485, 0.092, 3.033, 6.115, 6.004, 6.447, 2.44, 0.935, 1.596, 1.482, 1.544, 1.457, -0.145, -0.044, 1.756, 1.777, 2.151, 1.523, 3.032, 3.263, 2.586, 1.057,
  -0.24, 0.902, 0.5, 1.746, -0.404, -1.796, 4.318, -0.048, -1.112, 0.294, 0.688, 0.955, -0.119, 1.547, 2.059, 1.178, -0.696, 2.361, 3.858, 0.321, 1.347, 2.934, 2.011, 2.188, 2.523, 0.964, 0.878, 2.566, 1.769, 2.259, 1.165, 2.246, 10.278, -0.288, 1.141, 0.722, 0.019, 4.509, 3.761, 5.415, 4.743, 0.511, 1.91, 2.047, 3.444,
  1.197, -1.832, 1.429, 0.93, -0.661, 2.494, 0.025, 1.776, 0.116, 1.805, 0.456, 0.808, 1.351, 0.948, 1.44, 0.88, 1.348, 1.06, -0.235, 1.238, 1.401, -0.986, 3.764, 1.421, 0.489, 2.851, 1.02, 0.285, 3.512, 0.482, 0.417, 4.186, -0.332, 0.82, 4.18, 1.23, 0.003, 3.823, 2.302, 0.288, 2.823, 1.123, -0.071, 1.687, 0.621, -0.186,
  1.028, 0.117, 0.514, 1.971, 0.678, 1.433, 1.697, 1.247, 0.532, 2.091, 1.217, 2.789, 1.131, 1.074, -1.213, 1.826, 0.54, 0.355, 0.916, 2.02, 1.302, 3.138, 1.791, 3.012, 2.175, 0.106, 2.623, 2.444, 3.121, 2.434, 2.756, 2.157, 1.114, 1.537, 1.725, 2.015]

$(function () {
    var $sensorChart = $("#sensor-chart");
    $.ajax({
      url: $sensorChart.data("url"),
      success: function (data) {

        var ctx = $sensorChart[0].getContext("2d");
        console.log(data);
        
        var xValues = [];
        var yValues = []; 
        var yValues2 = []; 
        var grense = 10;
        generateData("y = grense", 1, y_akse.length, 1);
        generateData2("y = -grense", 1, y_akse.length, 1);

        new Chart(ctx, {
          type: 'line',
          data: {
            labels: xValues, //data.labels
            datasets: [{
              label: 'akselerasjon i x retning',
              //backgroundColor: "rgba(0,0,0,1.0)",
              borderColor: "orange",
              borderWidth: 2,
              pointRadius: 0,
              fill: false,
              data: x_akse     //data.data
            },{
              label: 'ikke_vis',
              data: yValues2,
              borderWidth: 2.5,
              borderColor: "red",
              pointRadius: 0,
              fill: false,
            },{
              label: 'akselerasjon i z retning',
              data: z_akse,
              borderColor: "blue",
              borderWidth: 2,
              pointRadius: 0,
              fill: false
            },{
              label: 'akselerasjon i y retning',
              data: y_akse,
              borderColor: "#33AB5F",
              borderWidth: 2,
              pointRadius: 0,
              fill: false
            },{
              label: 'grense',
              data: yValues,
              borderWidth: 2.5,
              borderColor: "red",
              pointRadius: 0,
              fill: false
            }]          
          },
          options: {
            responsive: true,
            legend: {
              position: 'top',
            },
            legend: {
              labels: {
                 filter: function(label) {
                    if (label.text === 'ikke_vis') return false;
                    else return true;
                 }
              }
           },
            scales: {
              xAxes: [{
                display: false
              },
              {
                scaleLabel: {
                    display: true,
                    labelString: 'tid'
                  },
                type: 'linear',
                ticks: {
                    max: xValues[xValues.length-1],
                    stepSize: xValues.length/25
                  }
              }]
                }
          }
        });
        function generateData(value, i1, i2, step = 1) {
          for (let x = i1; x <= i2; x += step) {
            yValues.push(eval(value));
            xValues.push(x);
          }
        }
        function generateData2(value, i1, i2, step = 1) {
          for (let x = i1; x <= i2; x += step) {
            yValues2.push(eval(value));
          }
        }
      }
      
    });

  });
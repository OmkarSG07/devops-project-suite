/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 216.0, "minX": 0.0, "maxY": 11718.0, "series": [{"data": [[0.0, 216.0], [0.1, 216.0], [0.2, 217.0], [0.3, 217.0], [0.4, 218.0], [0.5, 218.0], [0.6, 218.0], [0.7, 218.0], [0.8, 220.0], [0.9, 220.0], [1.0, 220.0], [1.1, 220.0], [1.2, 220.0], [1.3, 220.0], [1.4, 221.0], [1.5, 221.0], [1.6, 221.0], [1.7, 221.0], [1.8, 221.0], [1.9, 221.0], [2.0, 222.0], [2.1, 222.0], [2.2, 223.0], [2.3, 223.0], [2.4, 223.0], [2.5, 223.0], [2.6, 224.0], [2.7, 224.0], [2.8, 224.0], [2.9, 225.0], [3.0, 225.0], [3.1, 225.0], [3.2, 225.0], [3.3, 225.0], [3.4, 225.0], [3.5, 225.0], [3.6, 225.0], [3.7, 225.0], [3.8, 225.0], [3.9, 225.0], [4.0, 225.0], [4.1, 225.0], [4.2, 225.0], [4.3, 225.0], [4.4, 225.0], [4.5, 225.0], [4.6, 225.0], [4.7, 226.0], [4.8, 226.0], [4.9, 226.0], [5.0, 226.0], [5.1, 226.0], [5.2, 226.0], [5.3, 226.0], [5.4, 226.0], [5.5, 226.0], [5.6, 226.0], [5.7, 226.0], [5.8, 226.0], [5.9, 226.0], [6.0, 226.0], [6.1, 226.0], [6.2, 226.0], [6.3, 226.0], [6.4, 227.0], [6.5, 227.0], [6.6, 227.0], [6.7, 227.0], [6.8, 227.0], [6.9, 227.0], [7.0, 227.0], [7.1, 227.0], [7.2, 227.0], [7.3, 227.0], [7.4, 227.0], [7.5, 227.0], [7.6, 227.0], [7.7, 227.0], [7.8, 227.0], [7.9, 228.0], [8.0, 228.0], [8.1, 228.0], [8.2, 228.0], [8.3, 228.0], [8.4, 229.0], [8.5, 229.0], [8.6, 229.0], [8.7, 229.0], [8.8, 229.0], [8.9, 229.0], [9.0, 229.0], [9.1, 229.0], [9.2, 229.0], [9.3, 229.0], [9.4, 229.0], [9.5, 229.0], [9.6, 230.0], [9.7, 230.0], [9.8, 230.0], [9.9, 230.0], [10.0, 230.0], [10.1, 230.0], [10.2, 230.0], [10.3, 230.0], [10.4, 230.0], [10.5, 230.0], [10.6, 230.0], [10.7, 230.0], [10.8, 231.0], [10.9, 231.0], [11.0, 231.0], [11.1, 231.0], [11.2, 231.0], [11.3, 231.0], [11.4, 231.0], [11.5, 231.0], [11.6, 231.0], [11.7, 231.0], [11.8, 231.0], [11.9, 231.0], [12.0, 231.0], [12.1, 231.0], [12.2, 231.0], [12.3, 231.0], [12.4, 231.0], [12.5, 231.0], [12.6, 231.0], [12.7, 231.0], [12.8, 232.0], [12.9, 232.0], [13.0, 232.0], [13.1, 232.0], [13.2, 232.0], [13.3, 232.0], [13.4, 232.0], [13.5, 232.0], [13.6, 232.0], [13.7, 232.0], [13.8, 232.0], [13.9, 232.0], [14.0, 232.0], [14.1, 232.0], [14.2, 233.0], [14.3, 233.0], [14.4, 233.0], [14.5, 233.0], [14.6, 233.0], [14.7, 233.0], [14.8, 233.0], [14.9, 233.0], [15.0, 233.0], [15.1, 233.0], [15.2, 233.0], [15.3, 233.0], [15.4, 233.0], [15.5, 233.0], [15.6, 233.0], [15.7, 233.0], [15.8, 233.0], [15.9, 233.0], [16.0, 233.0], [16.1, 233.0], [16.2, 233.0], [16.3, 233.0], [16.4, 233.0], [16.5, 233.0], [16.6, 234.0], [16.7, 234.0], [16.8, 234.0], [16.9, 234.0], [17.0, 234.0], [17.1, 234.0], [17.2, 234.0], [17.3, 234.0], [17.4, 234.0], [17.5, 234.0], [17.6, 234.0], [17.7, 234.0], [17.8, 234.0], [17.9, 234.0], [18.0, 234.0], [18.1, 234.0], [18.2, 234.0], [18.3, 234.0], [18.4, 234.0], [18.5, 234.0], [18.6, 234.0], [18.7, 234.0], [18.8, 234.0], [18.9, 234.0], [19.0, 234.0], [19.1, 234.0], [19.2, 234.0], [19.3, 234.0], [19.4, 234.0], [19.5, 234.0], [19.6, 234.0], [19.7, 234.0], [19.8, 234.0], [19.9, 234.0], [20.0, 234.0], [20.1, 234.0], [20.2, 235.0], [20.3, 235.0], [20.4, 235.0], [20.5, 235.0], [20.6, 235.0], [20.7, 235.0], [20.8, 235.0], [20.9, 235.0], [21.0, 235.0], [21.1, 235.0], [21.2, 235.0], [21.3, 235.0], [21.4, 235.0], [21.5, 235.0], [21.6, 235.0], [21.7, 235.0], [21.8, 235.0], [21.9, 235.0], [22.0, 235.0], [22.1, 235.0], [22.2, 235.0], [22.3, 235.0], [22.4, 235.0], [22.5, 235.0], [22.6, 235.0], [22.7, 235.0], [22.8, 235.0], [22.9, 235.0], [23.0, 235.0], [23.1, 235.0], [23.2, 236.0], [23.3, 236.0], [23.4, 236.0], [23.5, 236.0], [23.6, 236.0], [23.7, 236.0], [23.8, 236.0], [23.9, 236.0], [24.0, 236.0], [24.1, 236.0], [24.2, 236.0], [24.3, 236.0], [24.4, 236.0], [24.5, 236.0], [24.6, 236.0], [24.7, 236.0], [24.8, 236.0], [24.9, 236.0], [25.0, 236.0], [25.1, 236.0], [25.2, 237.0], [25.3, 237.0], [25.4, 237.0], [25.5, 237.0], [25.6, 237.0], [25.7, 237.0], [25.8, 237.0], [25.9, 237.0], [26.0, 237.0], [26.1, 237.0], [26.2, 237.0], [26.3, 237.0], [26.4, 237.0], [26.5, 237.0], [26.6, 237.0], [26.7, 237.0], [26.8, 237.0], [26.9, 237.0], [27.0, 237.0], [27.1, 237.0], [27.2, 237.0], [27.3, 237.0], [27.4, 237.0], [27.5, 237.0], [27.6, 237.0], [27.7, 237.0], [27.8, 237.0], [27.9, 237.0], [28.0, 237.0], [28.1, 237.0], [28.2, 237.0], [28.3, 237.0], [28.4, 237.0], [28.5, 237.0], [28.6, 237.0], [28.7, 237.0], [28.8, 237.0], [28.9, 237.0], [29.0, 237.0], [29.1, 237.0], [29.2, 237.0], [29.3, 237.0], [29.4, 237.0], [29.5, 237.0], [29.6, 237.0], [29.7, 237.0], [29.8, 238.0], [29.9, 238.0], [30.0, 238.0], [30.1, 238.0], [30.2, 238.0], [30.3, 238.0], [30.4, 238.0], [30.5, 238.0], [30.6, 238.0], [30.7, 238.0], [30.8, 238.0], [30.9, 238.0], [31.0, 239.0], [31.1, 239.0], [31.2, 239.0], [31.3, 239.0], [31.4, 239.0], [31.5, 239.0], [31.6, 239.0], [31.7, 239.0], [31.8, 239.0], [31.9, 239.0], [32.0, 239.0], [32.1, 239.0], [32.2, 239.0], [32.3, 239.0], [32.4, 239.0], [32.5, 239.0], [32.6, 239.0], [32.7, 239.0], [32.8, 239.0], [32.9, 239.0], [33.0, 239.0], [33.1, 239.0], [33.2, 239.0], [33.3, 239.0], [33.4, 239.0], [33.5, 239.0], [33.6, 239.0], [33.7, 239.0], [33.8, 239.0], [33.9, 239.0], [34.0, 239.0], [34.1, 239.0], [34.2, 240.0], [34.3, 240.0], [34.4, 240.0], [34.5, 240.0], [34.6, 240.0], [34.7, 240.0], [34.8, 240.0], [34.9, 240.0], [35.0, 240.0], [35.1, 240.0], [35.2, 240.0], [35.3, 240.0], [35.4, 240.0], [35.5, 240.0], [35.6, 240.0], [35.7, 240.0], [35.8, 240.0], [35.9, 240.0], [36.0, 240.0], [36.1, 240.0], [36.2, 240.0], [36.3, 240.0], [36.4, 240.0], [36.5, 240.0], [36.6, 241.0], [36.7, 241.0], [36.8, 241.0], [36.9, 241.0], [37.0, 241.0], [37.1, 241.0], [37.2, 241.0], [37.3, 241.0], [37.4, 241.0], [37.5, 241.0], [37.6, 241.0], [37.7, 241.0], [37.8, 241.0], [37.9, 241.0], [38.0, 241.0], [38.1, 241.0], [38.2, 241.0], [38.3, 241.0], [38.4, 241.0], [38.5, 241.0], [38.6, 241.0], [38.7, 241.0], [38.8, 241.0], [38.9, 241.0], [39.0, 241.0], [39.1, 241.0], [39.2, 241.0], [39.3, 241.0], [39.4, 241.0], [39.5, 241.0], [39.6, 242.0], [39.7, 242.0], [39.8, 242.0], [39.9, 242.0], [40.0, 242.0], [40.1, 242.0], [40.2, 242.0], [40.3, 242.0], [40.4, 242.0], [40.5, 242.0], [40.6, 242.0], [40.7, 242.0], [40.8, 242.0], [40.9, 242.0], [41.0, 242.0], [41.1, 242.0], [41.2, 242.0], [41.3, 242.0], [41.4, 242.0], [41.5, 242.0], [41.6, 242.0], [41.7, 242.0], [41.8, 242.0], [41.9, 242.0], [42.0, 242.0], [42.1, 242.0], [42.2, 243.0], [42.3, 243.0], [42.4, 243.0], [42.5, 243.0], [42.6, 243.0], [42.7, 243.0], [42.8, 243.0], [42.9, 243.0], [43.0, 243.0], [43.1, 243.0], [43.2, 243.0], [43.3, 243.0], [43.4, 243.0], [43.5, 243.0], [43.6, 243.0], [43.7, 243.0], [43.8, 243.0], [43.9, 243.0], [44.0, 243.0], [44.1, 243.0], [44.2, 243.0], [44.3, 243.0], [44.4, 243.0], [44.5, 243.0], [44.6, 243.0], [44.7, 243.0], [44.8, 243.0], [44.9, 243.0], [45.0, 243.0], [45.1, 243.0], [45.2, 243.0], [45.3, 243.0], [45.4, 243.0], [45.5, 243.0], [45.6, 243.0], [45.7, 243.0], [45.8, 243.0], [45.9, 243.0], [46.0, 243.0], [46.1, 243.0], [46.2, 243.0], [46.3, 243.0], [46.4, 243.0], [46.5, 243.0], [46.6, 243.0], [46.7, 243.0], [46.8, 244.0], [46.9, 244.0], [47.0, 244.0], [47.1, 244.0], [47.2, 244.0], [47.3, 244.0], [47.4, 244.0], [47.5, 244.0], [47.6, 244.0], [47.7, 244.0], [47.8, 244.0], [47.9, 244.0], [48.0, 244.0], [48.1, 244.0], [48.2, 244.0], [48.3, 244.0], [48.4, 245.0], [48.5, 245.0], [48.6, 245.0], [48.7, 245.0], [48.8, 245.0], [48.9, 245.0], [49.0, 245.0], [49.1, 245.0], [49.2, 245.0], [49.3, 245.0], [49.4, 245.0], [49.5, 245.0], [49.6, 245.0], [49.7, 245.0], [49.8, 245.0], [49.9, 245.0], [50.0, 245.0], [50.1, 245.0], [50.2, 245.0], [50.3, 245.0], [50.4, 246.0], [50.5, 246.0], [50.6, 246.0], [50.7, 246.0], [50.8, 246.0], [50.9, 246.0], [51.0, 246.0], [51.1, 246.0], [51.2, 246.0], [51.3, 246.0], [51.4, 246.0], [51.5, 246.0], [51.6, 246.0], [51.7, 246.0], [51.8, 247.0], [51.9, 247.0], [52.0, 247.0], [52.1, 247.0], [52.2, 247.0], [52.3, 247.0], [52.4, 247.0], [52.5, 247.0], [52.6, 247.0], [52.7, 247.0], [52.8, 247.0], [52.9, 247.0], [53.0, 247.0], [53.1, 247.0], [53.2, 247.0], [53.3, 247.0], [53.4, 247.0], [53.5, 247.0], [53.6, 247.0], [53.7, 247.0], [53.8, 247.0], [53.9, 247.0], [54.0, 247.0], [54.1, 247.0], [54.2, 248.0], [54.3, 248.0], [54.4, 248.0], [54.5, 248.0], [54.6, 248.0], [54.7, 248.0], [54.8, 248.0], [54.9, 248.0], [55.0, 248.0], [55.1, 248.0], [55.2, 249.0], [55.3, 249.0], [55.4, 249.0], [55.5, 249.0], [55.6, 249.0], [55.7, 249.0], [55.8, 249.0], [55.9, 249.0], [56.0, 249.0], [56.1, 249.0], [56.2, 249.0], [56.3, 249.0], [56.4, 250.0], [56.5, 250.0], [56.6, 250.0], [56.7, 250.0], [56.8, 250.0], [56.9, 250.0], [57.0, 250.0], [57.1, 250.0], [57.2, 250.0], [57.3, 250.0], [57.4, 250.0], [57.5, 250.0], [57.6, 250.0], [57.7, 250.0], [57.8, 250.0], [57.9, 250.0], [58.0, 250.0], [58.1, 250.0], [58.2, 250.0], [58.3, 250.0], [58.4, 251.0], [58.5, 251.0], [58.6, 251.0], [58.7, 251.0], [58.8, 251.0], [58.9, 251.0], [59.0, 251.0], [59.1, 251.0], [59.2, 251.0], [59.3, 251.0], [59.4, 251.0], [59.5, 251.0], [59.6, 251.0], [59.7, 251.0], [59.8, 251.0], [59.9, 251.0], [60.0, 251.0], [60.1, 251.0], [60.2, 251.0], [60.3, 251.0], [60.4, 252.0], [60.5, 252.0], [60.6, 252.0], [60.7, 252.0], [60.8, 252.0], [60.9, 252.0], [61.0, 252.0], [61.1, 252.0], [61.2, 252.0], [61.3, 252.0], [61.4, 252.0], [61.5, 252.0], [61.6, 252.0], [61.7, 252.0], [61.8, 252.0], [61.9, 252.0], [62.0, 252.0], [62.1, 252.0], [62.2, 253.0], [62.3, 253.0], [62.4, 253.0], [62.5, 253.0], [62.6, 253.0], [62.7, 253.0], [62.8, 253.0], [62.9, 253.0], [63.0, 253.0], [63.1, 253.0], [63.2, 253.0], [63.3, 253.0], [63.4, 254.0], [63.5, 254.0], [63.6, 254.0], [63.7, 254.0], [63.8, 254.0], [63.9, 254.0], [64.0, 254.0], [64.1, 254.0], [64.2, 254.0], [64.3, 254.0], [64.4, 254.0], [64.5, 254.0], [64.6, 254.0], [64.7, 254.0], [64.8, 255.0], [64.9, 255.0], [65.0, 255.0], [65.1, 255.0], [65.2, 255.0], [65.3, 255.0], [65.4, 255.0], [65.5, 255.0], [65.6, 255.0], [65.7, 255.0], [65.8, 255.0], [65.9, 255.0], [66.0, 255.0], [66.1, 255.0], [66.2, 255.0], [66.3, 255.0], [66.4, 255.0], [66.5, 255.0], [66.6, 256.0], [66.7, 256.0], [66.8, 256.0], [66.9, 256.0], [67.0, 256.0], [67.1, 256.0], [67.2, 256.0], [67.3, 256.0], [67.4, 256.0], [67.5, 256.0], [67.6, 256.0], [67.7, 256.0], [67.8, 256.0], [67.9, 256.0], [68.0, 256.0], [68.1, 256.0], [68.2, 257.0], [68.3, 257.0], [68.4, 257.0], [68.5, 257.0], [68.6, 257.0], [68.7, 257.0], [68.8, 258.0], [68.9, 258.0], [69.0, 258.0], [69.1, 258.0], [69.2, 258.0], [69.3, 258.0], [69.4, 258.0], [69.5, 258.0], [69.6, 258.0], [69.7, 258.0], [69.8, 258.0], [69.9, 258.0], [70.0, 259.0], [70.1, 259.0], [70.2, 259.0], [70.3, 259.0], [70.4, 259.0], [70.5, 259.0], [70.6, 260.0], [70.7, 260.0], [70.8, 260.0], [70.9, 260.0], [71.0, 260.0], [71.1, 260.0], [71.2, 260.0], [71.3, 260.0], [71.4, 260.0], [71.5, 260.0], [71.6, 261.0], [71.7, 261.0], [71.8, 261.0], [71.9, 261.0], [72.0, 261.0], [72.1, 261.0], [72.2, 261.0], [72.3, 261.0], [72.4, 261.0], [72.5, 261.0], [72.6, 261.0], [72.7, 261.0], [72.8, 262.0], [72.9, 262.0], [73.0, 262.0], [73.1, 262.0], [73.2, 262.0], [73.3, 262.0], [73.4, 262.0], [73.5, 262.0], [73.6, 262.0], [73.7, 262.0], [73.8, 263.0], [73.9, 263.0], [74.0, 263.0], [74.1, 263.0], [74.2, 263.0], [74.3, 263.0], [74.4, 263.0], [74.5, 263.0], [74.6, 263.0], [74.7, 263.0], [74.8, 264.0], [74.9, 264.0], [75.0, 264.0], [75.1, 264.0], [75.2, 264.0], [75.3, 264.0], [75.4, 264.0], [75.5, 264.0], [75.6, 265.0], [75.7, 265.0], [75.8, 265.0], [75.9, 265.0], [76.0, 265.0], [76.1, 265.0], [76.2, 265.0], [76.3, 265.0], [76.4, 266.0], [76.5, 266.0], [76.6, 266.0], [76.7, 266.0], [76.8, 266.0], [76.9, 266.0], [77.0, 267.0], [77.1, 267.0], [77.2, 267.0], [77.3, 267.0], [77.4, 267.0], [77.5, 267.0], [77.6, 267.0], [77.7, 267.0], [77.8, 267.0], [77.9, 267.0], [78.0, 267.0], [78.1, 267.0], [78.2, 268.0], [78.3, 268.0], [78.4, 269.0], [78.5, 269.0], [78.6, 269.0], [78.7, 269.0], [78.8, 269.0], [78.9, 269.0], [79.0, 269.0], [79.1, 269.0], [79.2, 269.0], [79.3, 269.0], [79.4, 270.0], [79.5, 270.0], [79.6, 270.0], [79.7, 270.0], [79.8, 271.0], [79.9, 271.0], [80.0, 271.0], [80.1, 271.0], [80.2, 271.0], [80.3, 271.0], [80.4, 272.0], [80.5, 272.0], [80.6, 272.0], [80.7, 272.0], [80.8, 272.0], [80.9, 272.0], [81.0, 272.0], [81.1, 272.0], [81.2, 273.0], [81.3, 273.0], [81.4, 273.0], [81.5, 273.0], [81.6, 273.0], [81.7, 273.0], [81.8, 273.0], [81.9, 273.0], [82.0, 274.0], [82.1, 274.0], [82.2, 274.0], [82.3, 274.0], [82.4, 275.0], [82.5, 275.0], [82.6, 276.0], [82.7, 276.0], [82.8, 276.0], [82.9, 276.0], [83.0, 276.0], [83.1, 276.0], [83.2, 277.0], [83.3, 277.0], [83.4, 277.0], [83.5, 277.0], [83.6, 278.0], [83.7, 278.0], [83.8, 278.0], [83.9, 278.0], [84.0, 278.0], [84.1, 278.0], [84.2, 278.0], [84.3, 278.0], [84.4, 278.0], [84.5, 278.0], [84.6, 278.0], [84.7, 278.0], [84.8, 278.0], [84.9, 278.0], [85.0, 278.0], [85.1, 278.0], [85.2, 278.0], [85.3, 278.0], [85.4, 278.0], [85.5, 278.0], [85.6, 279.0], [85.7, 279.0], [85.8, 279.0], [85.9, 279.0], [86.0, 280.0], [86.1, 280.0], [86.2, 280.0], [86.3, 280.0], [86.4, 280.0], [86.5, 280.0], [86.6, 281.0], [86.7, 281.0], [86.8, 281.0], [86.9, 281.0], [87.0, 283.0], [87.1, 283.0], [87.2, 284.0], [87.3, 284.0], [87.4, 285.0], [87.5, 285.0], [87.6, 285.0], [87.7, 285.0], [87.8, 286.0], [87.9, 286.0], [88.0, 287.0], [88.1, 287.0], [88.2, 289.0], [88.3, 289.0], [88.4, 289.0], [88.5, 289.0], [88.6, 289.0], [88.7, 290.0], [88.8, 290.0], [88.9, 291.0], [89.0, 291.0], [89.1, 297.0], [89.2, 297.0], [89.3, 302.0], [89.4, 302.0], [89.5, 304.0], [89.6, 304.0], [89.7, 317.0], [89.8, 317.0], [89.9, 326.0], [90.0, 326.0], [90.1, 7020.0], [90.2, 7020.0], [90.3, 7209.0], [90.4, 7209.0], [90.5, 7283.0], [90.6, 7283.0], [90.7, 7287.0], [90.8, 7287.0], [90.9, 7525.0], [91.0, 7525.0], [91.1, 7585.0], [91.2, 7585.0], [91.3, 7715.0], [91.4, 7715.0], [91.5, 7791.0], [91.6, 7791.0], [91.7, 7794.0], [91.8, 7794.0], [91.9, 7799.0], [92.0, 7799.0], [92.1, 7821.0], [92.2, 7821.0], [92.3, 7856.0], [92.4, 7856.0], [92.5, 7903.0], [92.6, 7903.0], [92.7, 7913.0], [92.8, 7913.0], [92.9, 8435.0], [93.0, 8435.0], [93.1, 8608.0], [93.2, 8608.0], [93.3, 8696.0], [93.4, 8696.0], [93.5, 8833.0], [93.6, 8833.0], [93.7, 8833.0], [93.8, 8833.0], [93.9, 8915.0], [94.0, 8915.0], [94.1, 9087.0], [94.2, 9087.0], [94.3, 9176.0], [94.4, 9176.0], [94.5, 9234.0], [94.6, 9234.0], [94.7, 9400.0], [94.8, 9400.0], [94.9, 9518.0], [95.0, 9518.0], [95.1, 9583.0], [95.2, 9583.0], [95.3, 9627.0], [95.4, 9627.0], [95.5, 9789.0], [95.6, 9789.0], [95.7, 9884.0], [95.8, 9884.0], [95.9, 9899.0], [96.0, 9899.0], [96.1, 10027.0], [96.2, 10027.0], [96.3, 10235.0], [96.4, 10235.0], [96.5, 10266.0], [96.6, 10266.0], [96.7, 10302.0], [96.8, 10302.0], [96.9, 10520.0], [97.0, 10520.0], [97.1, 10533.0], [97.2, 10533.0], [97.3, 10599.0], [97.4, 10599.0], [97.5, 10698.0], [97.6, 10698.0], [97.7, 10884.0], [97.8, 10884.0], [97.9, 11028.0], [98.0, 11028.0], [98.1, 11087.0], [98.2, 11087.0], [98.3, 11120.0], [98.4, 11120.0], [98.5, 11216.0], [98.6, 11216.0], [98.7, 11398.0], [98.8, 11398.0], [98.9, 11489.0], [99.0, 11489.0], [99.1, 11567.0], [99.2, 11567.0], [99.3, 11578.0], [99.4, 11578.0], [99.5, 11619.0], [99.6, 11619.0], [99.7, 11715.0], [99.8, 11715.0], [99.9, 11718.0], [100.0, 11718.0]], "isOverall": false, "label": "GET Homepage", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 446.0, "series": [{"data": [[8400.0, 1.0], [8600.0, 2.0], [8900.0, 1.0], [9200.0, 1.0], [9100.0, 1.0], [9000.0, 1.0], [8800.0, 2.0], [9500.0, 2.0], [9700.0, 1.0], [9400.0, 1.0], [9600.0, 1.0], [9800.0, 2.0], [10200.0, 2.0], [10000.0, 1.0], [10600.0, 1.0], [10500.0, 3.0], [10300.0, 1.0], [11000.0, 2.0], [11200.0, 1.0], [10800.0, 1.0], [11100.0, 1.0], [11500.0, 2.0], [11400.0, 1.0], [11300.0, 1.0], [11600.0, 1.0], [11700.0, 2.0], [200.0, 446.0], [300.0, 4.0], [7000.0, 1.0], [7200.0, 3.0], [7500.0, 2.0], [7900.0, 2.0], [7700.0, 4.0], [7800.0, 2.0]], "isOverall": false, "label": "GET Homepage", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 11700.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 50.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 450.0, "series": [{"data": [[0.0, 450.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 50.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 47.13399999999999, "minX": 1.75191894E12, "maxY": 47.13399999999999, "series": [{"data": [[1.75191894E12, 47.13399999999999]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75191894E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 225.0, "minX": 1.0, "maxY": 1331.68309859155, "series": [{"data": [[33.0, 234.5], [32.0, 231.0], [2.0, 242.0], [34.0, 233.0], [37.0, 227.0], [39.0, 233.0], [38.0, 233.0], [41.0, 225.0], [40.0, 225.0], [45.0, 226.0], [44.0, 231.0], [47.0, 234.5], [46.0, 225.0], [49.0, 234.66666666666666], [48.0, 236.00000000000003], [50.0, 1331.68309859155], [4.0, 245.0], [5.0, 243.5], [6.0, 244.0], [7.0, 241.0], [8.0, 243.0], [9.0, 240.0], [10.0, 243.0], [11.0, 240.0], [12.0, 243.0], [13.0, 236.0], [15.0, 237.5], [16.0, 238.0], [1.0, 252.0], [17.0, 237.0], [18.0, 237.0], [19.0, 235.0], [20.0, 232.0], [23.0, 239.33333333333334], [24.0, 247.5], [25.0, 249.5], [26.0, 248.0], [29.0, 242.0], [31.0, 238.25]], "isOverall": false, "label": "GET Homepage", "isController": false}, {"data": [[47.13399999999999, 1169.7900000000006]], "isOverall": false, "label": "GET Homepage-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1250.0, "minX": 1.75191894E12, "maxY": 19158.333333333332, "series": [{"data": [[1.75191894E12, 19158.333333333332]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.75191894E12, 1250.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75191894E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 1169.7900000000006, "minX": 1.75191894E12, "maxY": 1169.7900000000006, "series": [{"data": [[1.75191894E12, 1169.7900000000006]], "isOverall": false, "label": "GET Homepage", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75191894E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 1169.516, "minX": 1.75191894E12, "maxY": 1169.516, "series": [{"data": [[1.75191894E12, 1169.516]], "isOverall": false, "label": "GET Homepage", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75191894E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 915.4619999999999, "minX": 1.75191894E12, "maxY": 915.4619999999999, "series": [{"data": [[1.75191894E12, 915.4619999999999]], "isOverall": false, "label": "GET Homepage", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75191894E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 216.0, "minX": 1.75191894E12, "maxY": 11718.0, "series": [{"data": [[1.75191894E12, 11718.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.75191894E12, 216.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.75191894E12, 6350.600000000229]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.75191894E12, 11566.220000000001]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.75191894E12, 245.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.75191894E12, 9579.75]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75191894E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 237.0, "minX": 9.0, "maxY": 3673.0, "series": [{"data": [[9.0, 243.0], [192.0, 248.0], [199.0, 237.0], [100.0, 3673.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 199.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 237.0, "minX": 9.0, "maxY": 3673.0, "series": [{"data": [[9.0, 243.0], [192.0, 248.0], [199.0, 237.0], [100.0, 3673.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 199.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.5666666666666667, "minX": 1.75191888E12, "maxY": 7.766666666666667, "series": [{"data": [[1.75191888E12, 0.5666666666666667], [1.75191894E12, 7.766666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75191894E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 8.333333333333334, "minX": 1.75191894E12, "maxY": 8.333333333333334, "series": [{"data": [[1.75191894E12, 8.333333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75191894E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 8.333333333333334, "minX": 1.75191894E12, "maxY": 8.333333333333334, "series": [{"data": [[1.75191894E12, 8.333333333333334]], "isOverall": false, "label": "GET Homepage-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75191894E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 8.333333333333334, "minX": 1.75191894E12, "maxY": 8.333333333333334, "series": [{"data": [[1.75191894E12, 8.333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75191894E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}


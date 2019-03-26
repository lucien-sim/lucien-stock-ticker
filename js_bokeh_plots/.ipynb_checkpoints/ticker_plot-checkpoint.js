(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("04b57655-bfee-4b8a-b124-c22658311b56");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '04b57655-bfee-4b8a-b124-c22658311b56' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.0.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.0.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.0.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.0.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"7fceb805-9704-4824-9510-a3c16de817c5":{"roots":{"references":[{"attributes":{"callback":null,"data":{"AAPL":{"__ndarray__":"zczMzMykZUCkcD0K19tlQMP1KFyPymVAj8L1KFzHZUDXo3A9Cp9lQFK4HoXrYWVAKVyPwvWAZUD2KFyPwl1lQD0K16NwTWVAmpmZmZlZZUD2KFyPwkVlQBSuR+F6XGVA9ihcj8ItZUCF61G4Hk1lQK5H4XoUXmVASOF6FK7HZUD2KFyPwsVlQAAAAAAAaGVAcT0K16PQZECuR+F6FM5kQAAAAAAAqGRA9ihcj8JVY0CamZmZmYljQLgehetRuGNAZmZmZmYWY0A9CtejcD1jQJqZmZmZKWNACtejcD2aY0DsUbgehXtjQK5H4XoUXmNACtejcD0iY0AAAAAAAMBiQOF6FK5HCWNAmpmZmZk5Y0BSuB6F6yljQAAAAAAA2GJA9ihcj8J9YkC4HoXrUYhiQK5H4XoUxmFAPQrXo3C9Y0A=","dtype":"float64","shape":[40]},"Date":{"__ndarray__":"AABAaRaTdkIAAIADxJJ2QgAAwJ1xknZCAAAAOB+SdkIAAMAGKJF2QgAAAKHVkHZCAABAO4OQdkIAAIDVMJB2QgAAgD7njnZCAADA2JSOdkIAAABzQo52QgAAQA3wjXZCAACAp52NdkIAAEB2pox2QgAAgBBUjHZCAADAqgGMdkIAAABFr4t2QgAAQN9ci3ZCAAAArmWKdkIAAEBIE4p2QgAAgOLAiXZCAADAfG6JdkIAAAAXHIl2QgAAwOUkiHZCAAAAgNKHdkIAAEAagId2QgAAgLQth3ZCAACAHeSFdkIAAMC3kYV2QgAAAFI/hXZCAABA7OyEdkIAAICGmoR2QgAAQFWjg3ZCAACA71CDdkIAAMCJ/oJ2QgAAACSsgnZCAABAvlmCdkIAAACNYoF2QgAAQCcQgXZCAACAwb2AdkI=","dtype":"float64","shape":[40]},"date_str":["2019-02-28","2019-02-27","2019-02-26","2019-02-25","2019-02-22","2019-02-21","2019-02-20","2019-02-19","2019-02-15","2019-02-14","2019-02-13","2019-02-12","2019-02-11","2019-02-08","2019-02-07","2019-02-06","2019-02-05","2019-02-04","2019-02-01","2019-01-31","2019-01-30","2019-01-29","2019-01-28","2019-01-25","2019-01-24","2019-01-23","2019-01-22","2019-01-18","2019-01-17","2019-01-16","2019-01-15","2019-01-14","2019-01-11","2019-01-10","2019-01-09","2019-01-08","2019-01-07","2019-01-04","2019-01-03","2019-01-02"]},"selected":{"id":"1068","type":"Selection"},"selection_policy":{"id":"1069","type":"UnionRenderers"}},"id":"1033","type":"ColumnDataSource"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"1060","type":"DaysTicker"},{"attributes":{"callback":null},"id":"1004","type":"DataRange1d"},{"attributes":{"days":[1,8,15,22]},"id":"1061","type":"DaysTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1020","type":"PanTool"},{"id":"1021","type":"WheelZoomTool"},{"id":"1022","type":"BoxZoomTool"},{"id":"1023","type":"ResetTool"},{"id":"1024","type":"SaveTool"},{"id":"1048","type":"HoverTool"}]},"id":"1025","type":"Toolbar"},{"attributes":{"overlay":{"id":"1027","type":"BoxAnnotation"}},"id":"1022","type":"BoxZoomTool"},{"attributes":{"num_minor_ticks":5,"tickers":[{"id":"1056","type":"AdaptiveTicker"},{"id":"1057","type":"AdaptiveTicker"},{"id":"1058","type":"AdaptiveTicker"},{"id":"1059","type":"DaysTicker"},{"id":"1060","type":"DaysTicker"},{"id":"1061","type":"DaysTicker"},{"id":"1062","type":"DaysTicker"},{"id":"1063","type":"MonthsTicker"},{"id":"1064","type":"MonthsTicker"},{"id":"1065","type":"MonthsTicker"},{"id":"1066","type":"MonthsTicker"},{"id":"1067","type":"YearsTicker"}]},"id":"1011","type":"DatetimeTicker"},{"attributes":{"days":[1,15]},"id":"1062","type":"DaysTicker"},{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"1063","type":"MonthsTicker"},{"attributes":{},"id":"1006","type":"LinearScale"},{"attributes":{"line_color":"red","line_width":2,"x":{"field":"Date"},"y":{"field":"AAPL"}},"id":"1035","type":"Line"},{"attributes":{},"id":"1008","type":"LinearScale"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"1064","type":"MonthsTicker"},{"attributes":{"fill_alpha":{"value":0.25},"fill_color":{"value":"grey"},"line_color":{"value":null},"size":{"units":"screen","value":12},"x":{"field":"Date"},"y":{"field":"AAPL"}},"id":"1041","type":"Circle"},{"attributes":{"data_source":{"id":"1033","type":"ColumnDataSource"},"glyph":{"id":"1035","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1036","type":"Line"},"selection_glyph":null,"view":{"id":"1038","type":"CDSView"}},"id":"1037","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":12},"x":{"field":"Date"},"y":{"field":"AAPL"}},"id":"1042","type":"Circle"},{"attributes":{"months":[0,4,8]},"id":"1065","type":"MonthsTicker"},{"attributes":{"data_source":{"id":"1039","type":"ColumnDataSource"},"glyph":{"id":"1041","type":"Circle"},"hover_glyph":{"id":"1043","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"1042","type":"Circle"},"selection_glyph":null,"view":{"id":"1045","type":"CDSView"}},"id":"1044","type":"GlyphRenderer"},{"attributes":{},"id":"1052","type":"BasicTickFormatter"},{"attributes":{"months":[0,6]},"id":"1066","type":"MonthsTicker"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"Date"},"y":{"field":"AAPL"}},"id":"1036","type":"Line"},{"attributes":{},"id":"1021","type":"WheelZoomTool"},{"attributes":{},"id":"1016","type":"BasicTicker"},{"attributes":{"axis_label":"AAPL closing price","formatter":{"id":"1052","type":"BasicTickFormatter"},"plot":{"id":"1001","subtype":"Figure","type":"Plot"},"ticker":{"id":"1016","type":"BasicTicker"}},"id":"1015","type":"LinearAxis"},{"attributes":{},"id":"1067","type":"YearsTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1027","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"green"},"line_alpha":{"value":0.5},"line_color":{"value":null},"size":{"units":"screen","value":12},"x":{"field":"Date"},"y":{"field":"AAPL"}},"id":"1043","type":"Circle"},{"attributes":{"plot":{"id":"1001","subtype":"Figure","type":"Plot"},"ticker":{"id":"1011","type":"DatetimeTicker"}},"id":"1014","type":"Grid"},{"attributes":{},"id":"1068","type":"Selection"},{"attributes":{},"id":"1069","type":"UnionRenderers"},{"attributes":{"source":{"id":"1039","type":"ColumnDataSource"}},"id":"1045","type":"CDSView"},{"attributes":{},"id":"1023","type":"ResetTool"},{"attributes":{},"id":"1070","type":"Selection"},{"attributes":{"days":["%Y-%m-%d"],"hours":["%Y-%m-%d"],"months":["%Y-%m-%d"],"years":["%Y-%m-%d"]},"id":"1046","type":"DatetimeTickFormatter"},{"attributes":{},"id":"1071","type":"UnionRenderers"},{"attributes":{"source":{"id":"1033","type":"ColumnDataSource"}},"id":"1038","type":"CDSView"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"1059","type":"DaysTicker"},{"attributes":{"callback":null,"renderers":[{"id":"1044","type":"GlyphRenderer"}],"tooltips":[["date","@date_str"],["closing","@AAPL"]]},"id":"1048","type":"HoverTool"},{"attributes":{"callback":null,"data":{"AAPL":{"__ndarray__":"zczMzMykZUCkcD0K19tlQMP1KFyPymVAj8L1KFzHZUDXo3A9Cp9lQFK4HoXrYWVAKVyPwvWAZUD2KFyPwl1lQD0K16NwTWVAmpmZmZlZZUD2KFyPwkVlQBSuR+F6XGVA9ihcj8ItZUCF61G4Hk1lQK5H4XoUXmVASOF6FK7HZUD2KFyPwsVlQAAAAAAAaGVAcT0K16PQZECuR+F6FM5kQAAAAAAAqGRA9ihcj8JVY0CamZmZmYljQLgehetRuGNAZmZmZmYWY0A9CtejcD1jQJqZmZmZKWNACtejcD2aY0DsUbgehXtjQK5H4XoUXmNACtejcD0iY0AAAAAAAMBiQOF6FK5HCWNAmpmZmZk5Y0BSuB6F6yljQAAAAAAA2GJA9ihcj8J9YkC4HoXrUYhiQK5H4XoUxmFAPQrXo3C9Y0A=","dtype":"float64","shape":[40]},"Date":{"__ndarray__":"AABAaRaTdkIAAIADxJJ2QgAAwJ1xknZCAAAAOB+SdkIAAMAGKJF2QgAAAKHVkHZCAABAO4OQdkIAAIDVMJB2QgAAgD7njnZCAADA2JSOdkIAAABzQo52QgAAQA3wjXZCAACAp52NdkIAAEB2pox2QgAAgBBUjHZCAADAqgGMdkIAAABFr4t2QgAAQN9ci3ZCAAAArmWKdkIAAEBIE4p2QgAAgOLAiXZCAADAfG6JdkIAAAAXHIl2QgAAwOUkiHZCAAAAgNKHdkIAAEAagId2QgAAgLQth3ZCAACAHeSFdkIAAMC3kYV2QgAAAFI/hXZCAABA7OyEdkIAAICGmoR2QgAAQFWjg3ZCAACA71CDdkIAAMCJ/oJ2QgAAACSsgnZCAABAvlmCdkIAAACNYoF2QgAAQCcQgXZCAACAwb2AdkI=","dtype":"float64","shape":[40]},"date_str":["2019-02-28","2019-02-27","2019-02-26","2019-02-25","2019-02-22","2019-02-21","2019-02-20","2019-02-19","2019-02-15","2019-02-14","2019-02-13","2019-02-12","2019-02-11","2019-02-08","2019-02-07","2019-02-06","2019-02-05","2019-02-04","2019-02-01","2019-01-31","2019-01-30","2019-01-29","2019-01-28","2019-01-25","2019-01-24","2019-01-23","2019-01-22","2019-01-18","2019-01-17","2019-01-16","2019-01-15","2019-01-14","2019-01-11","2019-01-10","2019-01-09","2019-01-08","2019-01-07","2019-01-04","2019-01-03","2019-01-02"]},"selected":{"id":"1070","type":"Selection"},"selection_policy":{"id":"1071","type":"UnionRenderers"}},"id":"1039","type":"ColumnDataSource"},{"attributes":{},"id":"1024","type":"SaveTool"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"1057","type":"AdaptiveTicker"},{"attributes":{"mantissas":[1,2,5],"max_interval":500.0,"num_minor_ticks":0},"id":"1056","type":"AdaptiveTicker"},{"attributes":{"axis_label":"Date","formatter":{"id":"1046","type":"DatetimeTickFormatter"},"plot":{"id":"1001","subtype":"Figure","type":"Plot"},"ticker":{"id":"1011","type":"DatetimeTicker"}},"id":"1010","type":"DatetimeAxis"},{"attributes":{"below":[{"id":"1010","type":"DatetimeAxis"}],"left":[{"id":"1015","type":"LinearAxis"}],"outline_line_color":{"value":"black"},"plot_height":300,"plot_width":800,"renderers":[{"id":"1010","type":"DatetimeAxis"},{"id":"1014","type":"Grid"},{"id":"1015","type":"LinearAxis"},{"id":"1019","type":"Grid"},{"id":"1027","type":"BoxAnnotation"},{"id":"1037","type":"GlyphRenderer"},{"id":"1044","type":"GlyphRenderer"}],"title":{"id":"1051","type":"Title"},"toolbar":{"id":"1025","type":"Toolbar"},"x_range":{"id":"1002","type":"DataRange1d"},"x_scale":{"id":"1006","type":"LinearScale"},"y_range":{"id":"1004","type":"DataRange1d"},"y_scale":{"id":"1008","type":"LinearScale"}},"id":"1001","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"1051","type":"Title"},{"attributes":{"callback":null},"id":"1002","type":"DataRange1d"},{"attributes":{},"id":"1020","type":"PanTool"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"1058","type":"AdaptiveTicker"},{"attributes":{"dimension":1,"plot":{"id":"1001","subtype":"Figure","type":"Plot"},"ticker":{"id":"1016","type":"BasicTicker"}},"id":"1019","type":"Grid"}],"root_ids":["1001"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"7fceb805-9704-4824-9510-a3c16de817c5","roots":{"1001":"04b57655-bfee-4b8a-b124-c22658311b56"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-tables-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-tables-1.0.4.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
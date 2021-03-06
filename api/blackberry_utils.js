/*
* Copyright 2010-2011 Research In Motion Limited.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/**
 * @namespace The Utils object provides useful utility functions and properties.  
 * @toc {Utilities} Utils
 * @featureID blackberry.utils
 */
blackberry.utils = {
		
	
	/**
	 * @description Construct a new String by converting the blob using the specified character encoding
	 * @param {Blob} blob The Blob object to be converted.<br>The acceptable blob size is documented below:<br>
	 * <table class="confluenceTable">
	 *   <tr><th class="confluenceTh">&nbsp;</th><th class="confluenceTh">OS 5.0</th><th class="confluenceTh">OS 6.0</th><th class="confluenceTh">OS 7.0</th></tr>
	 *   <tr><td class="confluenceTd">BASE64</td><td class="confluenceTd" colspan="3" style="text-align:center">&lt;= 89,678 bytes</td></tr>
	 *   <tr><td class="confluenceTd">Other Encodings</td><td class="confluenceTd">&lt;= 524,288 bytes (512KB)</td><td class="confluenceTd">&lt;= 2,097,152 bytes (2MB)</td><td class="confluenceTd">&lt;= 524,236 bytes (511KB)</td></tr>	 	 
	 * </table>
	 * @param {String} [encoding = ISO-8859-1] The name of a supported character encoding.BlackBerry supports the following character encodings: ISO-8859-1, UTF-8, UTF-16BE, US-ASCII. Besides these encodings, Web API also supports BASE64 encoding. Support of other encodings depends on the configuration of the BlackBerry Smartphone.
	 * @returns {String} The String result from converting the Blob
     * @BB50+
	 * @PB10+
     * @RIPPLE
	 * @example
     * &lt;script type="text/javascript"&gt;
	 *
	 *  var fileName = "local:///data/fooFile.txt";
	 *
     *  function handleOpenedFile(fullPath, blobData) // callback function that is passed when using the blackberry.io.file.readFile API
     *  {
     *    xmlString = blackberry.utils.blobToString(blobData); 
     *  }
	 * 
     *  try{
	 *      if (blackberry.io.file.exists(fileName)) {
	 *		    blackberry.io.file.readFile(fileName, handleOpenedFile);
	 *      } 
	 *  }
	 *  catch (ex) {
	 *      alert("exist: " + ex.toString(0));
	 *  }
     *
     * &lt;/script&gt;
     */
	blobToString : function(blob,encoding){},

	/**
	 * @description Convert a document into a Blob. Supported in 5.0.0 only. 
	 * @param {Document} doc The document to be converted.
	 * @returns {Blob} The Blob result from converting the Document
	 * @deprecated This API is deprecated, please use {@link blackberry.utils.stringToBlob} instead.<br/><br/>
	 * For example:
	 * <pre>var foo = blackberry.utils.stringToBlob( document.toString() );</pre>
	 * @BB50
	 */
	documentToBlob : function(doc){},

	/**
	 * @description Convert a string object into a Blob using the specified character encoding.
	 * @param {String} str The string to be converted.<br>The acceptable string length is documented below:<br>
	 * <table class="confluenceTable">
	 *   <tr><th class="confluenceTh">&nbsp;</th><th class="confluenceTh">OS 5.0</th><th class="confluenceTh">OS 6.0</th><th class="confluenceTh">OS 7.0</th></tr>
	 *   <tr><td class="confluenceTd">BASE64</td><td class="confluenceTd" colspan="3" style="text-align:center">&lt;= 65,535</td></tr>
	 *   <tr><td class="confluenceTd">Other Encodings</td><td class="confluenceTd">&lt;= 524,288</td><td class="confluenceTd">&lt;= 2,097,152</td><td class="confluenceTd">&lt;= 524,236</td></tr>	 	 
	 * </table>
	 * @param {String} [encoding = ISO-8859-1] The name of a supported character encoding.BlackBerry supports the following character encodings: ISO-8859-1, UTF-8, UTF-16BE, US-ASCII. Besides these encodings, Web API also supports BASE64 encoding. Support of other encodings depends on the configuration of the BlackBerry Smartphone.
	 * @returns {Blob} The Blob result from converting the String
	 * @BB50+
	 * @PB10+
     * @RIPPLE
	 * @example
	 * &lt;script type="text/javascript"&gt;
	 *
	 * var myBlob = blackberry.utils.stringToBlob ("This is some sort of string that I would like to encode", "UTF-8");
	 * var filePath, fileDir;
	 *
	 * // Check what device you are using
	 * var OSversion = blackberry.system.softwareVersion; // Note: On the Playbook, only the OS Version will actually say the what type of device it is. For handheld device, blackberry.system.model will return the actual model (ie. 9780)
     *
	 * // Establishing where to save my file depending on which device I have
	 * if (OSversion.indexOf("Playbook") == -1) { // Device is BlackBerry
	 *     
	 *    //Now need to check if there is a SD card on the device
	 *    if (blackberry.io.dir.exists("file:///SDCard")) { //The only way to see if the SDCard is inserted into the device is by checking to see if the directory is there.
	 *
     *          fileDir = "file:///SDCard/dir1";
     *          blackberry.io.dir.createNewDir(fileDir);
     *
     *    } else { // Apparently there no SD card, so we're saving the blob on the local device
	 *
	 *          fileDir = "file:///store/dir1";
     *          blackberry.io.dir.createNewDir(fileDir);
	 *
	 *    }
	 * } else {
	 *    // Device is Playbook
	 *
	 *    // To make this example easier, I did not turn on "File Sharing" and choosing to save in the app storage area.	 
	 *    fileDir = blackberry.io.dir.appDirs.app.storage.path + "/dir1";  
	 *                                                    
	 *    blackberry.io.dir.createNewDir(fileDir);
	 * }
	 * 
	 * try {
	 *    blackberry.io.file.saveFile(filedir + "/blob.txt", myBlob);
	 * } catch (e) {
     *    alert('e.message = ' + e.message);
     * }			
     * 
	 * &lt;/script&gt;
	 */
	stringToBlob : function(str,encoding){},
	
	
	/**
	 * @description This method will generate a unique number.
	 * @returns {Number} A unique number from JavaScript's Math.random() function.
     * @BB50+
	 * @PB10+
     * @RIPPLE
	 * @example
	 * &lt;script type="text/javascript"&gt;
	 *
	 * var myID = blackberry.utils.generateUniqueId();
	 *
	 * &lt;/script&gt;
	 */
	generateUniqueId: function(){},
	
	/**
	 * @description Parses a URL string and returns an URL object.
	 * @param {String} url The URL string to be parsed.
	 * @returns {blackberry.utils.URL} A {@link blackberry.utils.URL} object is returned if the parsing is successful.
     * @BB50+
	 * @PB10+ 
     * @RIPPLE
	 * @example 
	 * &lt;script type="text/javascript"&gt;
	 * var myURL = "https://bdsc.webapps.blackberry.com/html5/";
	 * 
	 * var URLObj = blackberry.utils.URL(myURL); 
	 *
	 * &lt;/script&gt;
	 */
	parseURL: function(url){},
		
	/**
	 * @class A URL Utility object contains information about a URL string.   
	 * @toc {Utilities} URL
	 * @featureID blackberry.utils
	 * @description Construct a URL object.
	 */
	URL : {
		
		
		/**
		 * @description Obtain the value of a parameter by key.
		 * @param {String} key The key of the parameter to be retrieved.
		 * @returns {String} An undefined object is returned if the key does not exist in the URL query.
		 * @BB50+
		 * @PB10+
         * @RIPPLE
		 */
		prototype.getURLParameter:function(key){},
		
		/**
		 * @description Obtain the value of a parameter by index. The values are stored in the order they appear in the URL string.
		 * @param {Number} index The index of the parameter to be retrieved.
		 * @returns {String} An undefined object is returned if the index is invalid.
         * @BB50+
		 * @PB10+
         * @RIPPLE
		 */
		prototype.getURLParameterByIndex:function(index){},
		
		/**
		 * @readOnly
		 * @type String
		 * @BB50+
		 * @PB10+
         * @RIPPLE
		 * @description Host address in the URL string.
		 */
		prototype.host:null,
		/**
		 * @readOnly
		 * @type Number
		 * @BB50+
		 * @PB10+
         * @RIPPLE
		 * @description Port number in the URL string.
		 */
		prototype.port:null
	}
};

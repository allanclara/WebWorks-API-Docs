
var menuHasSelected, localStore, localStoreAvailable, setup, Storage, menu_map,menu_link_map, default_menu, index_menu, class_menu, topics_menu;

index_menu = [{"children": [], "alt": "", "link": "/html5/apis/classes.html", "id": "class", "title": "All classes"}, {"title": "Topics", "created_statically": true, "id": "topics", "link": "/html5/apis/topics.html", "alt": "Classes sorted via topics", "children": []}];

class_menu = [{"id":"blackberry.pim.Address","title":"Address","alt":"blackberry.pim.Address","link":"/html5/apis/blackberry.pim.Address.html","children":[]},{"id":"blackberry.invoke.AddressBookArguments","title":"AddressBookArguments","alt":"blackberry.invoke.AddressBookArguments","link":"/html5/apis/blackberry.invoke.AddressBookArguments.html","children":[]},{"id":"blackberry.app","title":"Application","alt":"blackberry.app","link":"/html5/apis/blackberry.app.html","children":[]},{"id":"blackberry.app.event","title":"Application Event","alt":"blackberry.app.event","link":"/html5/apis/blackberry.app.event.html","children":[]},{"id":"blackberry.pim.Appointment","title":"Appointment","alt":"blackberry.pim.Appointment","link":"/html5/apis/blackberry.pim.Appointment.html","children":[]},{"id":"blackberry.pim.Attendee","title":"Attendee","alt":"blackberry.pim.Attendee","link":"/html5/apis/blackberry.pim.Attendee.html","children":[]},{"id":"blackberry.audio","title":"Audio","alt":"blackberry.audio","link":"/html5/apis/blackberry.audio.html","children":[]},{"id":"blackberry.audio.Player","title":"Audio Player","alt":"blackberry.audio.Player","link":"/html5/apis/blackberry.audio.Player.html","children":[]},{"id":"blackberry.advertising.Banner","title":"Banner","alt":"blackberry.advertising.Banner","link":"/html5/apis/blackberry.advertising.Banner.html","children":[]},{"id":"blackberry.bbm.platform","title":"BBM Platform","alt":"blackberry.bbm.platform","link":"/html5/apis/blackberry.bbm.platform.html","children":[]},{"id":"blackberry.bbm.platform.io.Channel","title":"blackberry.bbm.platform.io.Channel","alt":"blackberry.bbm.platform.io.Channel","link":"/html5/apis/blackberry.bbm.platform.io.Channel.html","children":[]},{"id":"blackberry.bbm.platform.io.Connection","title":"blackberry.bbm.platform.io.Connection","alt":"blackberry.bbm.platform.io.Connection","link":"/html5/apis/blackberry.bbm.platform.io.Connection.html","children":[]},{"id":"blackberry.bbm.platform.io.IncomingJoinRequest","title":"blackberry.bbm.platform.io.IncomingJoinRequest","alt":"blackberry.bbm.platform.io.IncomingJoinRequest","link":"/html5/apis/blackberry.bbm.platform.io.IncomingJoinRequest.html","children":[]},{"id":"blackberry.bbm.platform.io.JoinRequest","title":"blackberry.bbm.platform.io.JoinRequest","alt":"blackberry.bbm.platform.io.JoinRequest","link":"/html5/apis/blackberry.bbm.platform.io.JoinRequest.html","children":[]},{"id":"blackberry.bbm.platform.io.OutgoingJoinRequest","title":"blackberry.bbm.platform.io.OutgoingJoinRequest","alt":"blackberry.bbm.platform.io.OutgoingJoinRequest","link":"/html5/apis/blackberry.bbm.platform.io.OutgoingJoinRequest.html","children":[]},{"id":"blackberry.bbm.platform.io.Session","title":"blackberry.bbm.platform.io.Session","alt":"blackberry.bbm.platform.io.Session","link":"/html5/apis/blackberry.bbm.platform.io.Session.html","children":[]},{"id":"blackberry.bbm.platform.self.location","title":"blackberry.bbm.platform.self.location","alt":"blackberry.bbm.platform.self.location","link":"/html5/apis/blackberry.bbm.platform.self.location.html","children":[]},{"id":"blackberry.bbm.platform.self.profilebox.ProfileBoxItem","title":"blackberry.bbm.platform.self.profilebox.ProfileBoxItem","alt":"blackberry.bbm.platform.self.profilebox.ProfileBoxItem","link":"/html5/apis/blackberry.bbm.platform.self.profilebox.ProfileBoxItem.html","children":[]},{"id":"blackberry.bbm.platform.users.BBMPlatformUser","title":"blackberry.bbm.platform.users.BBMPlatformUser","alt":"blackberry.bbm.platform.users.BBMPlatformUser","link":"/html5/apis/blackberry.bbm.platform.users.BBMPlatformUser.html","children":[]},{"id":"blackberry.invoke.BrowserArguments","title":"BrowserArguments","alt":"blackberry.invoke.BrowserArguments","link":"/html5/apis/blackberry.invoke.BrowserArguments.html","children":[]},{"id":"blackberry.widgetcache.CacheInformation","title":"CacheInformation","alt":"blackberry.widgetcache.CacheInformation","link":"/html5/apis/blackberry.widgetcache.CacheInformation.html","children":[]},{"id":"blackberry.invoke.CalendarArguments","title":"CalendarArguments","alt":"blackberry.invoke.CalendarArguments","link":"/html5/apis/blackberry.invoke.CalendarArguments.html","children":[]},{"id":"blackberry.phone.Phone.Call","title":"Call","alt":"blackberry.phone.Phone.Call","link":"/html5/apis/blackberry.phone.Phone.Call.html","children":[]},{"id":"blackberry.phone.PhoneLogs.CallLog","title":"CallLog","alt":"blackberry.phone.PhoneLogs.CallLog","link":"/html5/apis/blackberry.phone.PhoneLogs.CallLog.html","children":[]},{"id":"blackberry.media.camera","title":"Camera","alt":"blackberry.media.camera","link":"/html5/apis/blackberry.media.camera.html","children":[]},{"id":"blackberry.invoke.CameraArguments","title":"CameraArguments","alt":"blackberry.invoke.CameraArguments","link":"/html5/apis/blackberry.invoke.CameraArguments.html","children":[]},{"id":"CanvasGradient","title":"CanvasGradient","alt":"CanvasGradient","link":"/html5/apis/CanvasGradient.html","children":[]},{"id":"CanvasPattern","title":"CanvasPattern","alt":"CanvasPattern","link":"/html5/apis/CanvasPattern.html","children":[]},{"id":"CanvasPixelArray","title":"CanvasPixelArray","alt":"CanvasPixelArray","link":"/html5/apis/CanvasPixelArray.html","children":[]},{"id":"blackberry.pim.category","title":"Category","alt":"blackberry.pim.category","link":"/html5/apis/blackberry.pim.category.html","children":[]},{"id":"blackberry.bbm.platform.io","title":"Connections","alt":"blackberry.bbm.platform.io","link":"/html5/apis/blackberry.bbm.platform.io.html","children":[]},{"id":"blackberry.pim.Contact","title":"Contact","alt":"blackberry.pim.Contact","link":"/html5/apis/blackberry.pim.Contact.html","children":[]},{"id":"blackberry.bbm.platform.self","title":"Current User","alt":"blackberry.bbm.platform.self","link":"/html5/apis/blackberry.bbm.platform.self.html","children":[]},{"id":"blackberry.push.Data","title":"Data","alt":"blackberry.push.Data","link":"/html5/apis/blackberry.push.Data.html","children":[]},{"id":"blackberry.ui.dialog","title":"Dialog","alt":"blackberry.ui.dialog","link":"/html5/apis/blackberry.ui.dialog.html","children":[]},{"id":"blackberry.io.dir","title":"Directory","alt":"blackberry.io.dir","link":"/html5/apis/blackberry.io.dir.html","children":[]},{"id":"blackberry.event","title":"Event","alt":"blackberry.event","link":"/html5/apis/blackberry.event.html","children":[]},{"id":"blackberry.io.file","title":"File","alt":"blackberry.io.file","link":"/html5/apis/blackberry.io.file.html","children":[]},{"id":"blackberry.io.file.FileProperties","title":"FileProperties","alt":"blackberry.io.file.FileProperties","link":"/html5/apis/blackberry.io.file.FileProperties.html","children":[]},{"id":"blackberry.find.FilterExpression","title":"FilterExpression","alt":"blackberry.find.FilterExpression","link":"/html5/apis/blackberry.find.FilterExpression.html","children":[]},{"id":"blackberry.phone.Find.FilterExpression","title":"Find FilterExpression","alt":"blackberry.phone.Find.FilterExpression","link":"/html5/apis/blackberry.phone.Find.FilterExpression.html","children":[]},{"id":"blackberry.focus","title":"Focus","alt":"blackberry.focus","link":"/html5/apis/blackberry.focus.html","children":[]},{"id":"CanvasRenderingContext2D","title":"HTML5 2D Canvas Context","alt":"CanvasRenderingContext2D","link":"/html5/apis/CanvasRenderingContext2D.html","children":[]},{"id":"Acceleration","title":"HTML5 Acceleration","alt":"Acceleration","link":"/html5/apis/Acceleration.html","children":[]},{"id":"ApplicationCache","title":"HTML5 ApplicationCache","alt":"ApplicationCache","link":"/html5/apis/ApplicationCache.html","children":[]},{"id":"HTMLAudioElement","title":"HTML5 Audio","alt":"HTMLAudioElement","link":"/html5/apis/HTMLAudioElement.html","children":[]},{"id":"canvas","title":"HTML5 Canvas","alt":"canvas","link":"/html5/apis/canvas.html","children":[]},{"id":"Coordinates","title":"HTML5 Coordinates","alt":"Coordinates","link":"/html5/apis/Coordinates.html","children":[]},{"id":"Database","title":"HTML5 Database","alt":"Database","link":"/html5/apis/Database.html","children":[]},{"id":"DeviceMotionEvent","title":"HTML5 Device Motion Event","alt":"DeviceMotionEvent","link":"/html5/apis/DeviceMotionEvent.html","children":[]},{"id":"Element","title":"HTML5 Element Touch Events","alt":"Element","link":"/html5/apis/Element.html","children":[]},{"id":"navigator.geolocation","title":"HTML5 Geolocation","alt":"navigator.geolocation","link":"/html5/apis/navigator.geolocation.html","children":[]},{"id":"localStorage","title":"HTML5 Local Storage","alt":"localStorage","link":"/html5/apis/localStorage.html","children":[]},{"id":"Position","title":"HTML5 Position","alt":"Position","link":"/html5/apis/Position.html","children":[]},{"id":"PositionError","title":"HTML5 PositionError","alt":"PositionError","link":"/html5/apis/PositionError.html","children":[]},{"id":"PositionOptions","title":"HTML5 PositionOptions","alt":"PositionOptions","link":"/html5/apis/PositionOptions.html","children":[]},{"id":"SQLError","title":"HTML5 SQLError","alt":"SQLError","link":"/html5/apis/SQLError.html","children":[]},{"id":"SQLResultSet","title":"HTML5 SQLResultSet","alt":"SQLResultSet","link":"/html5/apis/SQLResultSet.html","children":[]},{"id":"SQLResultSetRowList","title":"HTML5 SQLResultSetRowList","alt":"SQLResultSetRowList","link":"/html5/apis/SQLResultSetRowList.html","children":[]},{"id":"SQLTransaction","title":"HTML5 SQLTransaction","alt":"SQLTransaction","link":"/html5/apis/SQLTransaction.html","children":[]},{"id":"TouchEvent","title":"HTML5 Touch Event","alt":"TouchEvent","link":"/html5/apis/TouchEvent.html","children":[]},{"id":"HTMLVideoElement","title":"HTML5 Video","alt":"HTMLVideoElement","link":"/html5/apis/HTMLVideoElement.html","children":[]},{"id":"Worker","title":"HTML5 Web Workers","alt":"Worker","link":"/html5/apis/Worker.html","children":[]},{"id":"WebGLRenderingContext","title":"HTML5 WebGL Canvas Context","alt":"WebGLRenderingContext","link":"/html5/apis/WebGLRenderingContext.html","children":[]},{"id":"HTMLMediaElement","title":"HTMLMediaElement","alt":"HTMLMediaElement","link":"/html5/apis/HTMLMediaElement.html","children":[]},{"id":"HTMLSourceElement","title":"HTMLSourceElement","alt":"HTMLSourceElement","link":"/html5/apis/HTMLSourceElement.html","children":[]},{"id":"HTMLTrackElement","title":"HTMLTrackElement","alt":"HTMLTrackElement","link":"/html5/apis/HTMLTrackElement.html","children":[]},{"id":"blackberry.identity","title":"Identity","alt":"blackberry.identity","link":"/html5/apis/blackberry.identity.html","children":[]},{"id":"ImageData","title":"ImageData","alt":"ImageData","link":"/html5/apis/ImageData.html","children":[]},{"id":"blackberry.invoke","title":"Invoke","alt":"blackberry.invoke","link":"/html5/apis/blackberry.invoke.html","children":[]},{"id":"blackberry.invoke.JavaArguments","title":"JavaArguments","alt":"blackberry.invoke.JavaArguments","link":"/html5/apis/blackberry.invoke.JavaArguments.html","children":[]},{"id":"blackberry.invoke.MapsArguments","title":"MapsArguments","alt":"blackberry.invoke.MapsArguments","link":"/html5/apis/blackberry.invoke.MapsArguments.html","children":[]},{"id":"MediaError","title":"MediaError","alt":"MediaError","link":"/html5/apis/MediaError.html","children":[]},{"id":"blackberry.pim.Memo","title":"Memo","alt":"blackberry.pim.Memo","link":"/html5/apis/blackberry.pim.Memo.html","children":[]},{"id":"blackberry.invoke.MemoArguments","title":"MemoArguments","alt":"blackberry.invoke.MemoArguments","link":"/html5/apis/blackberry.invoke.MemoArguments.html","children":[]},{"id":"blackberry.ui.menu","title":"Menu","alt":"blackberry.ui.menu","link":"/html5/apis/blackberry.ui.menu.html","children":[]},{"id":"blackberry.ui.menu.MenuItem","title":"MenuItem","alt":"blackberry.ui.menu.MenuItem","link":"/html5/apis/blackberry.ui.menu.MenuItem.html","children":[]},{"id":"blackberry.message.Message","title":"Message","alt":"blackberry.message.Message","link":"/html5/apis/blackberry.message.Message.html","children":[]},{"id":"blackberry.invoke.MessageArguments","title":"MessageArguments","alt":"blackberry.invoke.MessageArguments","link":"/html5/apis/blackberry.invoke.MessageArguments.html","children":[]},{"id":"blackberry.media.microphone","title":"Microphone","alt":"blackberry.media.microphone","link":"/html5/apis/blackberry.media.microphone.html","children":[]},{"id":"MutableTextTrack","title":"MutableTextTrack","alt":"MutableTextTrack","link":"/html5/apis/MutableTextTrack.html","children":[]},{"id":"blackberry","title":"Network","alt":"blackberry","link":"/html5/apis/blackberry.html","children":[]},{"id":"blackberry.bbm.platform.users","title":"Other Users","alt":"blackberry.bbm.platform.users","link":"/html5/apis/blackberry.bbm.platform.users.html","children":[]},{"id":"blackberry.payment","title":"Payment","alt":"blackberry.payment","link":"/html5/apis/blackberry.payment.html","children":[]},{"id":"blackberry.phone.Phone","title":"Phone","alt":"blackberry.phone.Phone","link":"/html5/apis/blackberry.phone.Phone.html","children":[]},{"id":"blackberry.identity.phone","title":"Phone","alt":"blackberry.identity.phone","link":"/html5/apis/blackberry.identity.phone.html","children":[]},{"id":"blackberry.invoke.PhoneArguments","title":"PhoneArguments","alt":"blackberry.invoke.PhoneArguments","link":"/html5/apis/blackberry.invoke.PhoneArguments.html","children":[]},{"id":"blackberry.phone.PhoneLogs","title":"PhoneLogs","alt":"blackberry.phone.PhoneLogs","link":"/html5/apis/blackberry.phone.PhoneLogs.html","children":[]},{"id":"blackberry.bbm.platform.self.profilebox","title":"Profile Box","alt":"blackberry.bbm.platform.self.profilebox","link":"/html5/apis/blackberry.bbm.platform.self.profilebox.html","children":[]},{"id":"Purchase","title":"Purchase","alt":"Purchase","link":"/html5/apis/Purchase.html","children":[]},{"id":"blackberry.push","title":"Push","alt":"blackberry.push","link":"/html5/apis/blackberry.push.html","children":[]},{"id":"blackberry.pim.Recurrence","title":"Recurrence","alt":"blackberry.pim.Recurrence","link":"/html5/apis/blackberry.pim.Recurrence.html","children":[]},{"id":"blackberry.pim.Reminder","title":"Reminder","alt":"blackberry.pim.Reminder","link":"/html5/apis/blackberry.pim.Reminder.html","children":[]},{"id":"blackberry.invoke.SearchArguments","title":"SearchArguments","alt":"blackberry.invoke.SearchArguments","link":"/html5/apis/blackberry.invoke.SearchArguments.html","children":[]},{"id":"blackberry.identity.Service","title":"Service","alt":"blackberry.identity.Service","link":"/html5/apis/blackberry.identity.Service.html","children":[]},{"id":"blackberry.bbm.platform.settings","title":"Settings","alt":"blackberry.bbm.platform.settings","link":"/html5/apis/blackberry.bbm.platform.settings.html","children":[]},{"id":"blackberry.message.sms","title":"SMS","alt":"blackberry.message.sms","link":"/html5/apis/blackberry.message.sms.html","children":[]},{"id":"blackberry.system","title":"System","alt":"blackberry.system","link":"/html5/apis/blackberry.system.html","children":[]},{"id":"blackberry.system.event","title":"System Event","alt":"blackberry.system.event","link":"/html5/apis/blackberry.system.event.html","children":[]},{"id":"blackberry.pim.Task","title":"Task","alt":"blackberry.pim.Task","link":"/html5/apis/blackberry.pim.Task.html","children":[]},{"id":"blackberry.invoke.TaskArguments","title":"TaskArguments","alt":"blackberry.invoke.TaskArguments","link":"/html5/apis/blackberry.invoke.TaskArguments.html","children":[]},{"id":"TextMetrics","title":"TextMetrics","alt":"TextMetrics","link":"/html5/apis/TextMetrics.html","children":[]},{"id":"TextTrack","title":"TextTrack","alt":"TextTrack","link":"/html5/apis/TextTrack.html","children":[]},{"id":"TextTrackCue","title":"TextTrackCue","alt":"TextTrackCue","link":"/html5/apis/TextTrackCue.html","children":[]},{"id":"TextTrackCueList","title":"TextTrackCueList","alt":"TextTrackCueList","link":"/html5/apis/TextTrackCueList.html","children":[]},{"id":"TimeRanges","title":"TimeRanges","alt":"TimeRanges","link":"/html5/apis/TimeRanges.html","children":[]},{"id":"Touch","title":"Touch","alt":"Touch","link":"/html5/apis/Touch.html","children":[]},{"id":"TouchList","title":"TouchList","alt":"TouchList","link":"/html5/apis/TouchList.html","children":[]},{"id":"blackberry.identity.Transport","title":"Transport","alt":"blackberry.identity.Transport","link":"/html5/apis/blackberry.identity.Transport.html","children":[]},{"id":"blackberry.utils.URL","title":"URL","alt":"blackberry.utils.URL","link":"/html5/apis/blackberry.utils.URL.html","children":[]},{"id":"blackberry.utils","title":"Utils","alt":"blackberry.utils","link":"/html5/apis/blackberry.utils.html","children":[]},{"id":"WebGLActiveInfo","title":"WebGLActiveInfo","alt":"WebGLActiveInfo","link":"/html5/apis/WebGLActiveInfo.html","children":[]},{"id":"WebGLBuffer","title":"WebGLBuffer","alt":"WebGLBuffer","link":"/html5/apis/WebGLBuffer.html","children":[]},{"id":"WebGLContextAttributes","title":"WebGLContextAttributes","alt":"WebGLContextAttributes","link":"/html5/apis/WebGLContextAttributes.html","children":[]},{"id":"WebGLContextEvent","title":"WebGLContextEvent","alt":"WebGLContextEvent","link":"/html5/apis/WebGLContextEvent.html","children":[]},{"id":"WebGLFramebuffer","title":"WebGLFramebuffer","alt":"WebGLFramebuffer","link":"/html5/apis/WebGLFramebuffer.html","children":[]},{"id":"WebGLObject","title":"WebGLObject","alt":"WebGLObject","link":"/html5/apis/WebGLObject.html","children":[]},{"id":"WebGLProgram","title":"WebGLProgram","alt":"WebGLProgram","link":"/html5/apis/WebGLProgram.html","children":[]},{"id":"WebGLRenderbuffer","title":"WebGLRenderbuffer","alt":"WebGLRenderbuffer","link":"/html5/apis/WebGLRenderbuffer.html","children":[]},{"id":"WebGLShader","title":"WebGLShader","alt":"WebGLShader","link":"/html5/apis/WebGLShader.html","children":[]},{"id":"WebGLTexture","title":"WebGLTexture","alt":"WebGLTexture","link":"/html5/apis/WebGLTexture.html","children":[]},{"id":"WebGLUniformLocation","title":"WebGLUniformLocation","alt":"WebGLUniformLocation","link":"/html5/apis/WebGLUniformLocation.html","children":[]},{"id":"blackberry.widgetcache","title":"WidgetCache","alt":"blackberry.widgetcache","link":"/html5/apis/blackberry.widgetcache.html","children":[]}];

topics_menu = [{"id":"blackberry.advertising.Banner","title":"Advertising","alt":"blackberry.advertising.Banner","subsection":true,"link":"/html5/apis/blackberry.advertising.Banner.html","children":[{"id":"blackberry.advertising.Banner","title":"Banner","alt":"blackberry.advertising.Banner","link":"/html5/apis/blackberry.advertising.Banner.html","children":[]}]},{"id":"blackberry.bbm.platform","title":"BBM","alt":"blackberry.bbm.platform","subsection":true,"link":"/html5/apis/blackberry.bbm.platform.html","children":[{"id":"blackberry.bbm.platform","title":"BBM Platform","alt":"blackberry.bbm.platform","link":"/html5/apis/blackberry.bbm.platform.html","children":[]},{"id":"blackberry.bbm.platform.io","title":"Connections","alt":"blackberry.bbm.platform.io","link":"/html5/apis/blackberry.bbm.platform.io.html","children":[]},{"id":"blackberry.bbm.platform.self","title":"Current User","alt":"blackberry.bbm.platform.self","link":"/html5/apis/blackberry.bbm.platform.self.html","children":[]},{"id":"blackberry.bbm.platform.users","title":"Other Users","alt":"blackberry.bbm.platform.users","link":"/html5/apis/blackberry.bbm.platform.users.html","children":[]},{"id":"blackberry.bbm.platform.self.profilebox","title":"Profile Box","alt":"blackberry.bbm.platform.self.profilebox","link":"/html5/apis/blackberry.bbm.platform.self.profilebox.html","children":[]},{"id":"blackberry.bbm.platform.settings","title":"Settings","alt":"blackberry.bbm.platform.settings","link":"/html5/apis/blackberry.bbm.platform.settings.html","children":[]}]},{"id":"blackberry.widgetcache.CacheInformation","title":"Cache","alt":"blackberry.widgetcache.CacheInformation","subsection":true,"link":"/html5/apis/blackberry.widgetcache.CacheInformation.html","children":[{"id":"blackberry.widgetcache.CacheInformation","title":"CacheInformation","alt":"blackberry.widgetcache.CacheInformation","link":"/html5/apis/blackberry.widgetcache.CacheInformation.html","children":[]},{"id":"ApplicationCache","title":"HTML5 ApplicationCache","alt":"ApplicationCache","link":"/html5/apis/ApplicationCache.html","children":[]},{"id":"blackberry.widgetcache","title":"WidgetCache","alt":"blackberry.widgetcache","link":"/html5/apis/blackberry.widgetcache.html","children":[]}]},{"id":"Database","title":"Data Storage","alt":"Database","subsection":true,"link":"/html5/apis/Database.html","children":[{"id":"Database","title":"HTML5 Database","alt":"Database","link":"/html5/apis/Database.html","children":[]},{"id":"localStorage","title":"HTML5 Local Storage","alt":"localStorage","link":"/html5/apis/localStorage.html","children":[]},{"id":"SQLError","title":"HTML5 SQLError","alt":"SQLError","link":"/html5/apis/SQLError.html","children":[]},{"id":"SQLResultSet","title":"HTML5 SQLResultSet","alt":"SQLResultSet","link":"/html5/apis/SQLResultSet.html","children":[]},{"id":"SQLResultSetRowList","title":"HTML5 SQLResultSetRowList","alt":"SQLResultSetRowList","link":"/html5/apis/SQLResultSetRowList.html","children":[]},{"id":"SQLTransaction","title":"HTML5 SQLTransaction","alt":"SQLTransaction","link":"/html5/apis/SQLTransaction.html","children":[]}]},{"id":"Acceleration","title":"Device Motion","alt":"Acceleration","subsection":true,"link":"/html5/apis/Acceleration.html","children":[{"id":"Acceleration","title":"HTML5 Acceleration","alt":"Acceleration","link":"/html5/apis/Acceleration.html","children":[]},{"id":"DeviceMotionEvent","title":"HTML5 Device Motion Event","alt":"DeviceMotionEvent","link":"/html5/apis/DeviceMotionEvent.html","children":[]}]},{"id":"blackberry.event","title":"Event","alt":"blackberry.event","subsection":true,"link":"/html5/apis/blackberry.event.html","children":[{"id":"blackberry.event","title":"Event","alt":"blackberry.event","link":"/html5/apis/blackberry.event.html","children":[]}]},{"id":"Coordinates","title":"GPS","alt":"Coordinates","subsection":true,"link":"/html5/apis/Coordinates.html","children":[{"id":"Coordinates","title":"HTML5 Coordinates","alt":"Coordinates","link":"/html5/apis/Coordinates.html","children":[]},{"id":"navigator.geolocation","title":"HTML5 Geolocation","alt":"navigator.geolocation","link":"/html5/apis/navigator.geolocation.html","children":[]},{"id":"Position","title":"HTML5 Position","alt":"Position","link":"/html5/apis/Position.html","children":[]},{"id":"PositionError","title":"HTML5 PositionError","alt":"PositionError","link":"/html5/apis/PositionError.html","children":[]},{"id":"PositionOptions","title":"HTML5 PositionOptions","alt":"PositionOptions","link":"/html5/apis/PositionOptions.html","children":[]}]},{"id":"blackberry.identity","title":"Identity","alt":"blackberry.identity","subsection":true,"link":"/html5/apis/blackberry.identity.html","children":[{"id":"blackberry.identity","title":"Identity","alt":"blackberry.identity","link":"/html5/apis/blackberry.identity.html","children":[]},{"id":"blackberry.identity.phone","title":"Phone","alt":"blackberry.identity.phone","link":"/html5/apis/blackberry.identity.phone.html","children":[]},{"id":"blackberry.identity.Service","title":"Service","alt":"blackberry.identity.Service","link":"/html5/apis/blackberry.identity.Service.html","children":[]},{"id":"blackberry.identity.Transport","title":"Transport","alt":"blackberry.identity.Transport","link":"/html5/apis/blackberry.identity.Transport.html","children":[]}]},{"id":"blackberry.invoke.AddressBookArguments","title":"Invoke","alt":"blackberry.invoke.AddressBookArguments","subsection":true,"link":"/html5/apis/blackberry.invoke.AddressBookArguments.html","children":[{"id":"blackberry.invoke.AddressBookArguments","title":"AddressBookArguments","alt":"blackberry.invoke.AddressBookArguments","link":"/html5/apis/blackberry.invoke.AddressBookArguments.html","children":[]},{"id":"blackberry.invoke.BrowserArguments","title":"BrowserArguments","alt":"blackberry.invoke.BrowserArguments","link":"/html5/apis/blackberry.invoke.BrowserArguments.html","children":[]},{"id":"blackberry.invoke.CalendarArguments","title":"CalendarArguments","alt":"blackberry.invoke.CalendarArguments","link":"/html5/apis/blackberry.invoke.CalendarArguments.html","children":[]},{"id":"blackberry.invoke.CameraArguments","title":"CameraArguments","alt":"blackberry.invoke.CameraArguments","link":"/html5/apis/blackberry.invoke.CameraArguments.html","children":[]},{"id":"blackberry.invoke","title":"Invoke","alt":"blackberry.invoke","link":"/html5/apis/blackberry.invoke.html","children":[]},{"id":"blackberry.invoke.JavaArguments","title":"JavaArguments","alt":"blackberry.invoke.JavaArguments","link":"/html5/apis/blackberry.invoke.JavaArguments.html","children":[]},{"id":"blackberry.invoke.MapsArguments","title":"MapsArguments","alt":"blackberry.invoke.MapsArguments","link":"/html5/apis/blackberry.invoke.MapsArguments.html","children":[]},{"id":"blackberry.invoke.MemoArguments","title":"MemoArguments","alt":"blackberry.invoke.MemoArguments","link":"/html5/apis/blackberry.invoke.MemoArguments.html","children":[]},{"id":"blackberry.invoke.MessageArguments","title":"MessageArguments","alt":"blackberry.invoke.MessageArguments","link":"/html5/apis/blackberry.invoke.MessageArguments.html","children":[]},{"id":"blackberry.invoke.PhoneArguments","title":"PhoneArguments","alt":"blackberry.invoke.PhoneArguments","link":"/html5/apis/blackberry.invoke.PhoneArguments.html","children":[]},{"id":"blackberry.invoke.SearchArguments","title":"SearchArguments","alt":"blackberry.invoke.SearchArguments","link":"/html5/apis/blackberry.invoke.SearchArguments.html","children":[]},{"id":"blackberry.invoke.TaskArguments","title":"TaskArguments","alt":"blackberry.invoke.TaskArguments","link":"/html5/apis/blackberry.invoke.TaskArguments.html","children":[]}]},{"id":"blackberry.io.dir","title":"IO","alt":"blackberry.io.dir","subsection":true,"link":"/html5/apis/blackberry.io.dir.html","children":[{"id":"blackberry.io.dir","title":"Directory","alt":"blackberry.io.dir","link":"/html5/apis/blackberry.io.dir.html","children":[]},{"id":"blackberry.io.file","title":"File","alt":"blackberry.io.file","link":"/html5/apis/blackberry.io.file.html","children":[]},{"id":"blackberry.io.file.FileProperties","title":"FileProperties","alt":"blackberry.io.file.FileProperties","link":"/html5/apis/blackberry.io.file.FileProperties.html","children":[]}]},{"id":"blackberry.audio","title":"Media","alt":"blackberry.audio","subsection":true,"link":"/html5/apis/blackberry.audio.html","children":[{"id":"blackberry.audio","title":"Audio","alt":"blackberry.audio","link":"/html5/apis/blackberry.audio.html","children":[]},{"id":"blackberry.audio.Player","title":"Audio Player","alt":"blackberry.audio.Player","link":"/html5/apis/blackberry.audio.Player.html","children":[]},{"id":"blackberry.media.camera","title":"Camera","alt":"blackberry.media.camera","link":"/html5/apis/blackberry.media.camera.html","children":[]},{"id":"HTMLAudioElement","title":"HTML5 Audio","alt":"HTMLAudioElement","link":"/html5/apis/HTMLAudioElement.html","children":[]},{"id":"HTMLVideoElement","title":"HTML5 Video","alt":"HTMLVideoElement","link":"/html5/apis/HTMLVideoElement.html","children":[]},{"id":"blackberry.media.microphone","title":"Microphone","alt":"blackberry.media.microphone","link":"/html5/apis/blackberry.media.microphone.html","children":[]}]},{"id":"blackberry.message.Message","title":"Message","alt":"blackberry.message.Message","subsection":true,"link":"/html5/apis/blackberry.message.Message.html","children":[{"id":"blackberry.message.Message","title":"Message","alt":"blackberry.message.Message","link":"/html5/apis/blackberry.message.Message.html","children":[]},{"id":"blackberry.message.sms","title":"SMS","alt":"blackberry.message.sms","link":"/html5/apis/blackberry.message.sms.html","children":[]}]},{"id":"blackberry.payment","title":"Payment","alt":"blackberry.payment","subsection":true,"link":"/html5/apis/blackberry.payment.html","children":[{"id":"blackberry.payment","title":"Payment","alt":"blackberry.payment","link":"/html5/apis/blackberry.payment.html","children":[]},{"id":"Purchase","title":"Purchase","alt":"Purchase","link":"/html5/apis/Purchase.html","children":[]}]},{"id":"blackberry.phone.Phone.Call","title":"Phone","alt":"blackberry.phone.Phone.Call","subsection":true,"link":"/html5/apis/blackberry.phone.Phone.Call.html","children":[{"id":"blackberry.phone.Phone.Call","title":"Call","alt":"blackberry.phone.Phone.Call","link":"/html5/apis/blackberry.phone.Phone.Call.html","children":[]},{"id":"blackberry.phone.PhoneLogs.CallLog","title":"CallLog","alt":"blackberry.phone.PhoneLogs.CallLog","link":"/html5/apis/blackberry.phone.PhoneLogs.CallLog.html","children":[]},{"id":"blackberry.phone.Find.FilterExpression","title":"Find FilterExpression","alt":"blackberry.phone.Find.FilterExpression","link":"/html5/apis/blackberry.phone.Find.FilterExpression.html","children":[]},{"id":"blackberry.phone.Phone","title":"Phone","alt":"blackberry.phone.Phone","link":"/html5/apis/blackberry.phone.Phone.html","children":[]},{"id":"blackberry.phone.PhoneLogs","title":"PhoneLogs","alt":"blackberry.phone.PhoneLogs","link":"/html5/apis/blackberry.phone.PhoneLogs.html","children":[]}]},{"id":"blackberry.pim.Address","title":"PIM","alt":"blackberry.pim.Address","subsection":true,"link":"/html5/apis/blackberry.pim.Address.html","children":[{"id":"blackberry.pim.Address","title":"Address","alt":"blackberry.pim.Address","link":"/html5/apis/blackberry.pim.Address.html","children":[]},{"id":"blackberry.pim.Appointment","title":"Appointment","alt":"blackberry.pim.Appointment","link":"/html5/apis/blackberry.pim.Appointment.html","children":[]},{"id":"blackberry.pim.Attendee","title":"Attendee","alt":"blackberry.pim.Attendee","link":"/html5/apis/blackberry.pim.Attendee.html","children":[]},{"id":"blackberry.pim.category","title":"Category","alt":"blackberry.pim.category","link":"/html5/apis/blackberry.pim.category.html","children":[]},{"id":"blackberry.pim.Contact","title":"Contact","alt":"blackberry.pim.Contact","link":"/html5/apis/blackberry.pim.Contact.html","children":[]},{"id":"blackberry.find.FilterExpression","title":"FilterExpression","alt":"blackberry.find.FilterExpression","link":"/html5/apis/blackberry.find.FilterExpression.html","children":[]},{"id":"blackberry.pim.Memo","title":"Memo","alt":"blackberry.pim.Memo","link":"/html5/apis/blackberry.pim.Memo.html","children":[]},{"id":"blackberry.pim.Recurrence","title":"Recurrence","alt":"blackberry.pim.Recurrence","link":"/html5/apis/blackberry.pim.Recurrence.html","children":[]},{"id":"blackberry.pim.Reminder","title":"Reminder","alt":"blackberry.pim.Reminder","link":"/html5/apis/blackberry.pim.Reminder.html","children":[]},{"id":"blackberry.pim.Task","title":"Task","alt":"blackberry.pim.Task","link":"/html5/apis/blackberry.pim.Task.html","children":[]}]},{"id":"blackberry.push.Data","title":"Push","alt":"blackberry.push.Data","subsection":true,"link":"/html5/apis/blackberry.push.Data.html","children":[{"id":"blackberry.push.Data","title":"Data","alt":"blackberry.push.Data","link":"/html5/apis/blackberry.push.Data.html","children":[]},{"id":"blackberry.push","title":"Push","alt":"blackberry.push","link":"/html5/apis/blackberry.push.html","children":[]}]},{"id":"blackberry.app","title":"System","alt":"blackberry.app","subsection":true,"link":"/html5/apis/blackberry.app.html","children":[{"id":"blackberry.app","title":"Application","alt":"blackberry.app","link":"/html5/apis/blackberry.app.html","children":[]},{"id":"blackberry.app.event","title":"Application Event","alt":"blackberry.app.event","link":"/html5/apis/blackberry.app.event.html","children":[]},{"id":"Worker","title":"HTML5 Web Workers","alt":"Worker","link":"/html5/apis/Worker.html","children":[]},{"id":"blackberry","title":"Network","alt":"blackberry","link":"/html5/apis/blackberry.html","children":[]},{"id":"blackberry.system","title":"System","alt":"blackberry.system","link":"/html5/apis/blackberry.system.html","children":[]},{"id":"blackberry.system.event","title":"System Event","alt":"blackberry.system.event","link":"/html5/apis/blackberry.system.event.html","children":[]}]},{"id":"Element","title":"Touch","alt":"Element","subsection":true,"link":"/html5/apis/Element.html","children":[{"id":"Element","title":"HTML5 Element Touch Events","alt":"Element","link":"/html5/apis/Element.html","children":[]},{"id":"TouchEvent","title":"HTML5 Touch Event","alt":"TouchEvent","link":"/html5/apis/TouchEvent.html","children":[]}]},{"id":"blackberry.ui.dialog","title":"User Interface","alt":"blackberry.ui.dialog","subsection":true,"link":"/html5/apis/blackberry.ui.dialog.html","children":[{"id":"blackberry.ui.dialog","title":"Dialog","alt":"blackberry.ui.dialog","link":"/html5/apis/blackberry.ui.dialog.html","children":[]},{"id":"blackberry.focus","title":"Focus","alt":"blackberry.focus","link":"/html5/apis/blackberry.focus.html","children":[]},{"id":"CanvasRenderingContext2D","title":"HTML5 2D Canvas Context","alt":"CanvasRenderingContext2D","link":"/html5/apis/CanvasRenderingContext2D.html","children":[]},{"id":"canvas","title":"HTML5 Canvas","alt":"canvas","link":"/html5/apis/canvas.html","children":[]},{"id":"WebGLRenderingContext","title":"HTML5 WebGL Canvas Context","alt":"WebGLRenderingContext","link":"/html5/apis/WebGLRenderingContext.html","children":[]},{"id":"blackberry.ui.menu","title":"Menu","alt":"blackberry.ui.menu","link":"/html5/apis/blackberry.ui.menu.html","children":[]},{"id":"blackberry.ui.menu.MenuItem","title":"MenuItem","alt":"blackberry.ui.menu.MenuItem","link":"/html5/apis/blackberry.ui.menu.MenuItem.html","children":[]}]},{"id":"blackberry.utils.URL","title":"Utilities","alt":"blackberry.utils.URL","subsection":true,"link":"/html5/apis/blackberry.utils.URL.html","children":[{"id":"blackberry.utils.URL","title":"URL","alt":"blackberry.utils.URL","link":"/html5/apis/blackberry.utils.URL.html","children":[]},{"id":"blackberry.utils","title":"Utils","alt":"blackberry.utils","link":"/html5/apis/blackberry.utils.html","children":[]}]}];

menu_link_map = {
"index_menu": "/html5/apis/index.html",
"class_menu": "/html5/apis/classes.html",
"topics_menu": "/html5/apis/topics.html"
};

menu_map = {
"index_menu": index_menu,
"class_menu": class_menu,
"topics_menu": topics_menu
};

default_menu = "topics_menu";

menus = ["index_menu", "class_menu", "topics_menu"];

is_ie7 = $('html').hasClass('ie7');
classAttr = 'class';
if (is_ie7) {
  classAttr = 'className';
}

function getCookie(cookie_name) {
    var results = document.cookie.match('(^|;) ?'+cookie_name+'=([^;]*)(;|$)');
    if (results) {
        return (unescape(results[2]));
    }
    else {
        return null;
    }
}

menuHasSelected = null;
localStore = null;
Storage = {
    setup : function() {
        localStorageAvailable = false;
        if (Modernizr.localstorage) {
            localStorageAvailable = true;
            localStore = window.localStorage;
            localStore.setItem('ran','once');
        } else {
            
        }
    },
    add:function(key,item) {
        if (localStorageAvailable) {
            localStore[key] = item;
        } else {
            /* TODO: Dynamic expire date of cookies */ 
            document.cookie = key+'='+item+'; expires=Fri, 10 Feb 2012 02:47:11 UTC; path=/'
        }
    },
    get:function(key) {
        if (localStorageAvailable) {
            if (key in localStore) {
                return localStore[key];
            } else {
                return null;
            }
        } else {
            return getCookie(key);
        }
    }
};

store = Storage;
store.setup();

function menuItemToHtml(menuItem, selected_url, level) {
    var li, a, span, txt, ult;
    li = document.createElement('li');
    a = document.createElement('a');
    a.setAttribute('href', menuItem['link']);
    a.setAttribute(classAttr, 'menu_link');
    span = document.createElement('span');
    if (menuItem['link'] == selected_url) {
        menuHasSelected = true;
        span.setAttribute(classAttr, 'item active');
    } else {
        span.setAttribute(classAttr, 'item');
    }
    
    if ("alt" in menuItem) {
        a.setAttribute('title',menuItem['alt']);
    }
    txt = document.createTextNode(menuItem['title']);
    a.appendChild(txt);
    span.appendChild(a);
    li.appendChild(span);
    if (menuItem['children'].length > 0) {
        ult = createListFromMenu(menuItem['children'], selected_url, level+1);
        li.appendChild(ult);
    }
    return li;
}

function createUl(level) {
    var ul = document.createElement('ul');
    ul.setAttribute(classAttr, 'lv_'+level+' clearfix');
    return ul;
}


function createSubsection(name) {
    var txt, el, header;
    el = document.createElement('div');
    el.setAttribute(classAttr,'side-nav-sub_section clearfix');
    if (name != null) {
        txt = document.createTextNode(name);
        header = document.createElement('h3');
        header.appendChild(txt);
        el.appendChild(header);
    }
    return el;
}

function createListFromMenu(menu, selected, level) {
    var ul, mItem, el, i;
    ul = createUl(level);
    for (i = 0; i < menu.length; i++) {
        mItem = menu[i];
        el = menuItemToHtml(mItem, selected, level);
        ul.appendChild(el);
    }
    if (menuHasSelected) {
        ul.setAttribute(classAttr, ul.getAttribute(classAttr)+' child_active');
        menuHasSelected = false;
    }
    
    return ul;
}

function createPrimaryMenu(menu, selected_menu) {
    var ul;
	ul = createListFromMenu(menu_map[menu],menu_link_map[selected_menu], 1);
    if (menuHasSelected != null) {
        menuHasSelected = null;
    }
    return ul;
}

function initMenu(selected_url, menu_to_load) {
    var sideNavPar, sideNavCh, prim, menu, sub, mi, ul, temp_ul, stored, selected, i;
    sideNavPar = document.getElementById('side-nav-parents');
    sideNavCh = document.getElementById('side-nav-children');
    
    if (menu_to_load != null) {
        menu = menu_map[menu_to_load];
        store.add('selectedmenu', menu_to_load)
    } else {
        stored = store.get('selectedmenu');
        if (stored == null) {
            menu = menu_map[default_menu];
            store.add('selectedmenu', default_menu)
        } else {
            menu = menu_map[stored];
            store.add('selectedmenu', stored);
        }
    }
	stored = store.get('selectedmenu');
	selected = stored != null ? stored : default_menu;
    prim = createPrimaryMenu('index_menu',selected);
    sideNavPar.appendChild(prim);
	$('#side-nav-parents').removeClass('loading');
    temp_ul = createUl(1);
    for (i = 0; i < menu.length; i++) {
        mi = menu[i];
        if (mi["subsection"] == true) {
            if (temp_ul.children.length > 0) {
                sub = createSubsection(null);
                if (menuHasSelected) {
                    temp_ul.setAttribute(classAttr, temp_ul.getAttribute(classAttr)+' child_active');
                }
                sub.appendChild(temp_ul);
                sideNavCh.appendChild(sub);
                temp_ul = createUl(0);
            }
            sub = createSubsection(mi['title']);
            ul = createListFromMenu(mi['children'], selected_url, 1);
            
            sub.appendChild(createListFromMenu(mi['children'], selected_url, 1));
            sideNavCh.appendChild(sub);
            if (menuHasSelected) {
                menuHasSelected = false;
            }
        } else {
            temp_ul.appendChild(menuItemToHtml(mi,selected_url, 1));
        }
    }
    if (temp_ul.children.length > 0) {
        sub = createSubsection(null);
        if (menuHasSelected) {
            temp_ul.setAttribute(classAttr, temp_ul.getAttribute(classAttr)+' child_active');
        }
        sub.appendChild(temp_ul);
        sideNavCh.appendChild(sub);
    }
    $('#side-nav-children').removeClass('loading');
}

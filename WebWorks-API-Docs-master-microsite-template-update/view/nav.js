
var menuHasSelected, localStore, localStoreAvailable, setup, Storage, menu_map,menu_link_map, default_menu, index_menu, class_menu, topics_menu;

index_menu = [{"children": [], "alt": "", "link": "classes.html", "id": "class", "title": "All classes"}, {"title": "Topics", "created_statically": true, "id": "topics", "link": "topics.html", "alt": "Classes sorted via topics", "children": []}];

class_menu = [{"id":"blackberry.pim.Address","title":"Address","alt":"blackberry.pim.Address","link":"blackberry.pim.Address.html","children":[]},{"id":"blackberry.invoke.AddressBookArguments","title":"AddressBookArguments","alt":"blackberry.invoke.AddressBookArguments","link":"blackberry.invoke.AddressBookArguments.html","children":[]},{"id":"blackberry.app","title":"Application","alt":"blackberry.app","link":"blackberry.app.html","children":[]},{"id":"blackberry.app.event","title":"Application Event","alt":"blackberry.app.event","link":"blackberry.app.event.html","children":[]},{"id":"blackberry.pim.Appointment","title":"Appointment","alt":"blackberry.pim.Appointment","link":"blackberry.pim.Appointment.html","children":[]},{"id":"blackberry.pim.Attendee","title":"Attendee","alt":"blackberry.pim.Attendee","link":"blackberry.pim.Attendee.html","children":[]},{"id":"blackberry.audio","title":"Audio","alt":"blackberry.audio","link":"blackberry.audio.html","children":[]},{"id":"blackberry.audio.Player","title":"Audio Player","alt":"blackberry.audio.Player","link":"blackberry.audio.Player.html","children":[]},{"id":"blackberry.advertising.Banner","title":"Banner","alt":"blackberry.advertising.Banner","link":"blackberry.advertising.Banner.html","children":[]},{"id":"blackberry.bbm.platform","title":"BBM Platform","alt":"blackberry.bbm.platform","link":"blackberry.bbm.platform.html","children":[]},{"id":"blackberry.bbm.platform.io.Channel","title":"blackberry.bbm.platform.io.Channel","alt":"blackberry.bbm.platform.io.Channel","link":"blackberry.bbm.platform.io.Channel.html","children":[]},{"id":"blackberry.bbm.platform.io.Connection","title":"blackberry.bbm.platform.io.Connection","alt":"blackberry.bbm.platform.io.Connection","link":"blackberry.bbm.platform.io.Connection.html","children":[]},{"id":"blackberry.bbm.platform.io.IncomingJoinRequest","title":"blackberry.bbm.platform.io.IncomingJoinRequest","alt":"blackberry.bbm.platform.io.IncomingJoinRequest","link":"blackberry.bbm.platform.io.IncomingJoinRequest.html","children":[]},{"id":"blackberry.bbm.platform.io.JoinRequest","title":"blackberry.bbm.platform.io.JoinRequest","alt":"blackberry.bbm.platform.io.JoinRequest","link":"blackberry.bbm.platform.io.JoinRequest.html","children":[]},{"id":"blackberry.bbm.platform.io.OutgoingJoinRequest","title":"blackberry.bbm.platform.io.OutgoingJoinRequest","alt":"blackberry.bbm.platform.io.OutgoingJoinRequest","link":"blackberry.bbm.platform.io.OutgoingJoinRequest.html","children":[]},{"id":"blackberry.bbm.platform.io.Session","title":"blackberry.bbm.platform.io.Session","alt":"blackberry.bbm.platform.io.Session","link":"blackberry.bbm.platform.io.Session.html","children":[]},{"id":"blackberry.bbm.platform.self.location","title":"blackberry.bbm.platform.self.location","alt":"blackberry.bbm.platform.self.location","link":"blackberry.bbm.platform.self.location.html","children":[]},{"id":"blackberry.bbm.platform.self.profilebox.ProfileBoxItem","title":"blackberry.bbm.platform.self.profilebox.ProfileBoxItem","alt":"blackberry.bbm.platform.self.profilebox.ProfileBoxItem","link":"blackberry.bbm.platform.self.profilebox.ProfileBoxItem.html","children":[]},{"id":"blackberry.bbm.platform.users.BBMPlatformUser","title":"blackberry.bbm.platform.users.BBMPlatformUser","alt":"blackberry.bbm.platform.users.BBMPlatformUser","link":"blackberry.bbm.platform.users.BBMPlatformUser.html","children":[]},{"id":"blackberry.invoke.BrowserArguments","title":"BrowserArguments","alt":"blackberry.invoke.BrowserArguments","link":"blackberry.invoke.BrowserArguments.html","children":[]},{"id":"blackberry.widgetcache.CacheInformation","title":"CacheInformation","alt":"blackberry.widgetcache.CacheInformation","link":"blackberry.widgetcache.CacheInformation.html","children":[]},{"id":"blackberry.invoke.CalendarArguments","title":"CalendarArguments","alt":"blackberry.invoke.CalendarArguments","link":"blackberry.invoke.CalendarArguments.html","children":[]},{"id":"blackberry.phone.Phone.Call","title":"Call","alt":"blackberry.phone.Phone.Call","link":"blackberry.phone.Phone.Call.html","children":[]},{"id":"blackberry.phone.PhoneLogs.CallLog","title":"CallLog","alt":"blackberry.phone.PhoneLogs.CallLog","link":"blackberry.phone.PhoneLogs.CallLog.html","children":[]},{"id":"blackberry.media.camera","title":"Camera","alt":"blackberry.media.camera","link":"blackberry.media.camera.html","children":[]},{"id":"blackberry.invoke.CameraArguments","title":"CameraArguments","alt":"blackberry.invoke.CameraArguments","link":"blackberry.invoke.CameraArguments.html","children":[]},{"id":"CanvasGradient","title":"CanvasGradient","alt":"CanvasGradient","link":"CanvasGradient.html","children":[]},{"id":"CanvasPattern","title":"CanvasPattern","alt":"CanvasPattern","link":"CanvasPattern.html","children":[]},{"id":"CanvasPixelArray","title":"CanvasPixelArray","alt":"CanvasPixelArray","link":"CanvasPixelArray.html","children":[]},{"id":"blackberry.pim.category","title":"Category","alt":"blackberry.pim.category","link":"blackberry.pim.category.html","children":[]},{"id":"blackberry.bbm.platform.io","title":"Connections","alt":"blackberry.bbm.platform.io","link":"blackberry.bbm.platform.io.html","children":[]},{"id":"blackberry.pim.Contact","title":"Contact","alt":"blackberry.pim.Contact","link":"blackberry.pim.Contact.html","children":[]},{"id":"blackberry.bbm.platform.self","title":"Current User","alt":"blackberry.bbm.platform.self","link":"blackberry.bbm.platform.self.html","children":[]},{"id":"blackberry.push.Data","title":"Data","alt":"blackberry.push.Data","link":"blackberry.push.Data.html","children":[]},{"id":"blackberry.ui.dialog","title":"Dialog","alt":"blackberry.ui.dialog","link":"blackberry.ui.dialog.html","children":[]},{"id":"blackberry.io.dir","title":"Directory","alt":"blackberry.io.dir","link":"blackberry.io.dir.html","children":[]},{"id":"blackberry.event","title":"Event","alt":"blackberry.event","link":"blackberry.event.html","children":[]},{"id":"blackberry.io.file","title":"File","alt":"blackberry.io.file","link":"blackberry.io.file.html","children":[]},{"id":"blackberry.io.file.FileProperties","title":"FileProperties","alt":"blackberry.io.file.FileProperties","link":"blackberry.io.file.FileProperties.html","children":[]},{"id":"blackberry.find.FilterExpression","title":"FilterExpression","alt":"blackberry.find.FilterExpression","link":"blackberry.find.FilterExpression.html","children":[]},{"id":"blackberry.phone.Find.FilterExpression","title":"Find FilterExpression","alt":"blackberry.phone.Find.FilterExpression","link":"blackberry.phone.Find.FilterExpression.html","children":[]},{"id":"blackberry.focus","title":"Focus","alt":"blackberry.focus","link":"blackberry.focus.html","children":[]},{"id":"CanvasRenderingContext2D","title":"HTML5 2D Canvas Context","alt":"CanvasRenderingContext2D","link":"CanvasRenderingContext2D.html","children":[]},{"id":"Acceleration","title":"HTML5 Acceleration","alt":"Acceleration","link":"Acceleration.html","children":[]},{"id":"ApplicationCache","title":"HTML5 ApplicationCache","alt":"ApplicationCache","link":"ApplicationCache.html","children":[]},{"id":"HTMLAudioElement","title":"HTML5 Audio","alt":"HTMLAudioElement","link":"HTMLAudioElement.html","children":[]},{"id":"canvas","title":"HTML5 Canvas","alt":"canvas","link":"canvas.html","children":[]},{"id":"Coordinates","title":"HTML5 Coordinates","alt":"Coordinates","link":"Coordinates.html","children":[]},{"id":"Database","title":"HTML5 Database","alt":"Database","link":"Database.html","children":[]},{"id":"DeviceMotionEvent","title":"HTML5 Device Motion Event","alt":"DeviceMotionEvent","link":"DeviceMotionEvent.html","children":[]},{"id":"Element","title":"HTML5 Element Touch Events","alt":"Element","link":"Element.html","children":[]},{"id":"navigator.geolocation","title":"HTML5 Geolocation","alt":"navigator.geolocation","link":"navigator.geolocation.html","children":[]},{"id":"localStorage","title":"HTML5 Local Storage","alt":"localStorage","link":"localStorage.html","children":[]},{"id":"Position","title":"HTML5 Position","alt":"Position","link":"Position.html","children":[]},{"id":"PositionError","title":"HTML5 PositionError","alt":"PositionError","link":"PositionError.html","children":[]},{"id":"PositionOptions","title":"HTML5 PositionOptions","alt":"PositionOptions","link":"PositionOptions.html","children":[]},{"id":"SQLError","title":"HTML5 SQLError","alt":"SQLError","link":"SQLError.html","children":[]},{"id":"SQLResultSet","title":"HTML5 SQLResultSet","alt":"SQLResultSet","link":"SQLResultSet.html","children":[]},{"id":"SQLResultSetRowList","title":"HTML5 SQLResultSetRowList","alt":"SQLResultSetRowList","link":"SQLResultSetRowList.html","children":[]},{"id":"SQLTransaction","title":"HTML5 SQLTransaction","alt":"SQLTransaction","link":"SQLTransaction.html","children":[]},{"id":"TouchEvent","title":"HTML5 Touch Event","alt":"TouchEvent","link":"TouchEvent.html","children":[]},{"id":"HTMLVideoElement","title":"HTML5 Video","alt":"HTMLVideoElement","link":"HTMLVideoElement.html","children":[]},{"id":"Worker","title":"HTML5 Web Workers","alt":"Worker","link":"Worker.html","children":[]},{"id":"WebGLRenderingContext","title":"HTML5 WebGL Canvas Context","alt":"WebGLRenderingContext","link":"WebGLRenderingContext.html","children":[]},{"id":"HTMLMediaElement","title":"HTMLMediaElement","alt":"HTMLMediaElement","link":"HTMLMediaElement.html","children":[]},{"id":"HTMLSourceElement","title":"HTMLSourceElement","alt":"HTMLSourceElement","link":"HTMLSourceElement.html","children":[]},{"id":"HTMLTrackElement","title":"HTMLTrackElement","alt":"HTMLTrackElement","link":"HTMLTrackElement.html","children":[]},{"id":"blackberry.identity","title":"Identity","alt":"blackberry.identity","link":"blackberry.identity.html","children":[]},{"id":"ImageData","title":"ImageData","alt":"ImageData","link":"ImageData.html","children":[]},{"id":"blackberry.invoke","title":"Invoke","alt":"blackberry.invoke","link":"blackberry.invoke.html","children":[]},{"id":"blackberry.invoke.JavaArguments","title":"JavaArguments","alt":"blackberry.invoke.JavaArguments","link":"blackberry.invoke.JavaArguments.html","children":[]},{"id":"blackberry.invoke.MapsArguments","title":"MapsArguments","alt":"blackberry.invoke.MapsArguments","link":"blackberry.invoke.MapsArguments.html","children":[]},{"id":"MediaError","title":"MediaError","alt":"MediaError","link":"MediaError.html","children":[]},{"id":"blackberry.pim.Memo","title":"Memo","alt":"blackberry.pim.Memo","link":"blackberry.pim.Memo.html","children":[]},{"id":"blackberry.invoke.MemoArguments","title":"MemoArguments","alt":"blackberry.invoke.MemoArguments","link":"blackberry.invoke.MemoArguments.html","children":[]},{"id":"blackberry.ui.menu","title":"Menu","alt":"blackberry.ui.menu","link":"blackberry.ui.menu.html","children":[]},{"id":"blackberry.ui.menu.MenuItem","title":"MenuItem","alt":"blackberry.ui.menu.MenuItem","link":"blackberry.ui.menu.MenuItem.html","children":[]},{"id":"blackberry.message.Message","title":"Message","alt":"blackberry.message.Message","link":"blackberry.message.Message.html","children":[]},{"id":"blackberry.invoke.MessageArguments","title":"MessageArguments","alt":"blackberry.invoke.MessageArguments","link":"blackberry.invoke.MessageArguments.html","children":[]},{"id":"blackberry.media.microphone","title":"Microphone","alt":"blackberry.media.microphone","link":"blackberry.media.microphone.html","children":[]},{"id":"MutableTextTrack","title":"MutableTextTrack","alt":"MutableTextTrack","link":"MutableTextTrack.html","children":[]},{"id":"blackberry","title":"Network","alt":"blackberry","link":"blackberry.html","children":[]},{"id":"blackberry.bbm.platform.users","title":"Other Users","alt":"blackberry.bbm.platform.users","link":"blackberry.bbm.platform.users.html","children":[]},{"id":"blackberry.payment","title":"Payment","alt":"blackberry.payment","link":"blackberry.payment.html","children":[]},{"id":"blackberry.identity.phone","title":"Phone","alt":"blackberry.identity.phone","link":"blackberry.identity.phone.html","children":[]},{"id":"blackberry.phone.Phone","title":"Phone","alt":"blackberry.phone.Phone","link":"blackberry.phone.Phone.html","children":[]},{"id":"blackberry.invoke.PhoneArguments","title":"PhoneArguments","alt":"blackberry.invoke.PhoneArguments","link":"blackberry.invoke.PhoneArguments.html","children":[]},{"id":"blackberry.phone.PhoneLogs","title":"PhoneLogs","alt":"blackberry.phone.PhoneLogs","link":"blackberry.phone.PhoneLogs.html","children":[]},{"id":"blackberry.bbm.platform.self.profilebox","title":"Profile Box","alt":"blackberry.bbm.platform.self.profilebox","link":"blackberry.bbm.platform.self.profilebox.html","children":[]},{"id":"Purchase","title":"Purchase","alt":"Purchase","link":"Purchase.html","children":[]},{"id":"blackberry.push","title":"Push","alt":"blackberry.push","link":"blackberry.push.html","children":[]},{"id":"blackberry.pim.Recurrence","title":"Recurrence","alt":"blackberry.pim.Recurrence","link":"blackberry.pim.Recurrence.html","children":[]},{"id":"blackberry.pim.Reminder","title":"Reminder","alt":"blackberry.pim.Reminder","link":"blackberry.pim.Reminder.html","children":[]},{"id":"blackberry.invoke.SearchArguments","title":"SearchArguments","alt":"blackberry.invoke.SearchArguments","link":"blackberry.invoke.SearchArguments.html","children":[]},{"id":"blackberry.identity.Service","title":"Service","alt":"blackberry.identity.Service","link":"blackberry.identity.Service.html","children":[]},{"id":"blackberry.bbm.platform.settings","title":"Settings","alt":"blackberry.bbm.platform.settings","link":"blackberry.bbm.platform.settings.html","children":[]},{"id":"blackberry.message.sms","title":"SMS","alt":"blackberry.message.sms","link":"blackberry.message.sms.html","children":[]},{"id":"blackberry.system","title":"System","alt":"blackberry.system","link":"blackberry.system.html","children":[]},{"id":"blackberry.system.event","title":"System Event","alt":"blackberry.system.event","link":"blackberry.system.event.html","children":[]},{"id":"blackberry.pim.Task","title":"Task","alt":"blackberry.pim.Task","link":"blackberry.pim.Task.html","children":[]},{"id":"blackberry.invoke.TaskArguments","title":"TaskArguments","alt":"blackberry.invoke.TaskArguments","link":"blackberry.invoke.TaskArguments.html","children":[]},{"id":"TextMetrics","title":"TextMetrics","alt":"TextMetrics","link":"TextMetrics.html","children":[]},{"id":"TextTrack","title":"TextTrack","alt":"TextTrack","link":"TextTrack.html","children":[]},{"id":"TextTrackCue","title":"TextTrackCue","alt":"TextTrackCue","link":"TextTrackCue.html","children":[]},{"id":"TextTrackCueList","title":"TextTrackCueList","alt":"TextTrackCueList","link":"TextTrackCueList.html","children":[]},{"id":"TimeRanges","title":"TimeRanges","alt":"TimeRanges","link":"TimeRanges.html","children":[]},{"id":"Touch","title":"Touch","alt":"Touch","link":"Touch.html","children":[]},{"id":"TouchList","title":"TouchList","alt":"TouchList","link":"TouchList.html","children":[]},{"id":"blackberry.identity.Transport","title":"Transport","alt":"blackberry.identity.Transport","link":"blackberry.identity.Transport.html","children":[]},{"id":"blackberry.utils.URL","title":"URL","alt":"blackberry.utils.URL","link":"blackberry.utils.URL.html","children":[]},{"id":"blackberry.utils","title":"Utils","alt":"blackberry.utils","link":"blackberry.utils.html","children":[]},{"id":"WebGLActiveInfo","title":"WebGLActiveInfo","alt":"WebGLActiveInfo","link":"WebGLActiveInfo.html","children":[]},{"id":"WebGLBuffer","title":"WebGLBuffer","alt":"WebGLBuffer","link":"WebGLBuffer.html","children":[]},{"id":"WebGLContextAttributes","title":"WebGLContextAttributes","alt":"WebGLContextAttributes","link":"WebGLContextAttributes.html","children":[]},{"id":"WebGLContextEvent","title":"WebGLContextEvent","alt":"WebGLContextEvent","link":"WebGLContextEvent.html","children":[]},{"id":"WebGLFramebuffer","title":"WebGLFramebuffer","alt":"WebGLFramebuffer","link":"WebGLFramebuffer.html","children":[]},{"id":"WebGLObject","title":"WebGLObject","alt":"WebGLObject","link":"WebGLObject.html","children":[]},{"id":"WebGLProgram","title":"WebGLProgram","alt":"WebGLProgram","link":"WebGLProgram.html","children":[]},{"id":"WebGLRenderbuffer","title":"WebGLRenderbuffer","alt":"WebGLRenderbuffer","link":"WebGLRenderbuffer.html","children":[]},{"id":"WebGLShader","title":"WebGLShader","alt":"WebGLShader","link":"WebGLShader.html","children":[]},{"id":"WebGLTexture","title":"WebGLTexture","alt":"WebGLTexture","link":"WebGLTexture.html","children":[]},{"id":"WebGLUniformLocation","title":"WebGLUniformLocation","alt":"WebGLUniformLocation","link":"WebGLUniformLocation.html","children":[]},{"id":"blackberry.widgetcache","title":"WidgetCache","alt":"blackberry.widgetcache","link":"blackberry.widgetcache.html","children":[]}];

topics_menu = [{"id":"blackberry.advertising.Banner","title":"Advertising","alt":"blackberry.advertising.Banner","subsection":true,"link":"blackberry.advertising.Banner.html","children":[{"id":"blackberry.advertising.Banner","title":"Banner","alt":"blackberry.advertising.Banner","link":"blackberry.advertising.Banner.html","children":[]}]},{"id":"blackberry.bbm.platform","title":"BBM","alt":"blackberry.bbm.platform","subsection":true,"link":"blackberry.bbm.platform.html","children":[{"id":"blackberry.bbm.platform","title":"BBM Platform","alt":"blackberry.bbm.platform","link":"blackberry.bbm.platform.html","children":[]},{"id":"blackberry.bbm.platform.io","title":"Connections","alt":"blackberry.bbm.platform.io","link":"blackberry.bbm.platform.io.html","children":[]},{"id":"blackberry.bbm.platform.self","title":"Current User","alt":"blackberry.bbm.platform.self","link":"blackberry.bbm.platform.self.html","children":[]},{"id":"blackberry.bbm.platform.users","title":"Other Users","alt":"blackberry.bbm.platform.users","link":"blackberry.bbm.platform.users.html","children":[]},{"id":"blackberry.bbm.platform.self.profilebox","title":"Profile Box","alt":"blackberry.bbm.platform.self.profilebox","link":"blackberry.bbm.platform.self.profilebox.html","children":[]},{"id":"blackberry.bbm.platform.settings","title":"Settings","alt":"blackberry.bbm.platform.settings","link":"blackberry.bbm.platform.settings.html","children":[]}]},{"id":"blackberry.widgetcache.CacheInformation","title":"Cache","alt":"blackberry.widgetcache.CacheInformation","subsection":true,"link":"blackberry.widgetcache.CacheInformation.html","children":[{"id":"blackberry.widgetcache.CacheInformation","title":"CacheInformation","alt":"blackberry.widgetcache.CacheInformation","link":"blackberry.widgetcache.CacheInformation.html","children":[]},{"id":"ApplicationCache","title":"HTML5 ApplicationCache","alt":"ApplicationCache","link":"ApplicationCache.html","children":[]},{"id":"blackberry.widgetcache","title":"WidgetCache","alt":"blackberry.widgetcache","link":"blackberry.widgetcache.html","children":[]}]},{"id":"Database","title":"Data Storage","alt":"Database","subsection":true,"link":"Database.html","children":[{"id":"Database","title":"HTML5 Database","alt":"Database","link":"Database.html","children":[]},{"id":"localStorage","title":"HTML5 Local Storage","alt":"localStorage","link":"localStorage.html","children":[]},{"id":"SQLError","title":"HTML5 SQLError","alt":"SQLError","link":"SQLError.html","children":[]},{"id":"SQLResultSet","title":"HTML5 SQLResultSet","alt":"SQLResultSet","link":"SQLResultSet.html","children":[]},{"id":"SQLResultSetRowList","title":"HTML5 SQLResultSetRowList","alt":"SQLResultSetRowList","link":"SQLResultSetRowList.html","children":[]},{"id":"SQLTransaction","title":"HTML5 SQLTransaction","alt":"SQLTransaction","link":"SQLTransaction.html","children":[]}]},{"id":"Acceleration","title":"Device Motion","alt":"Acceleration","subsection":true,"link":"Acceleration.html","children":[{"id":"Acceleration","title":"HTML5 Acceleration","alt":"Acceleration","link":"Acceleration.html","children":[]},{"id":"DeviceMotionEvent","title":"HTML5 Device Motion Event","alt":"DeviceMotionEvent","link":"DeviceMotionEvent.html","children":[]}]},{"id":"blackberry.event","title":"Event","alt":"blackberry.event","subsection":true,"link":"blackberry.event.html","children":[{"id":"blackberry.event","title":"Event","alt":"blackberry.event","link":"blackberry.event.html","children":[]}]},{"id":"Coordinates","title":"GPS","alt":"Coordinates","subsection":true,"link":"Coordinates.html","children":[{"id":"Coordinates","title":"HTML5 Coordinates","alt":"Coordinates","link":"Coordinates.html","children":[]},{"id":"navigator.geolocation","title":"HTML5 Geolocation","alt":"navigator.geolocation","link":"navigator.geolocation.html","children":[]},{"id":"Position","title":"HTML5 Position","alt":"Position","link":"Position.html","children":[]},{"id":"PositionError","title":"HTML5 PositionError","alt":"PositionError","link":"PositionError.html","children":[]},{"id":"PositionOptions","title":"HTML5 PositionOptions","alt":"PositionOptions","link":"PositionOptions.html","children":[]}]},{"id":"blackberry.identity","title":"Identity","alt":"blackberry.identity","subsection":true,"link":"blackberry.identity.html","children":[{"id":"blackberry.identity","title":"Identity","alt":"blackberry.identity","link":"blackberry.identity.html","children":[]},{"id":"blackberry.identity.phone","title":"Phone","alt":"blackberry.identity.phone","link":"blackberry.identity.phone.html","children":[]},{"id":"blackberry.identity.Service","title":"Service","alt":"blackberry.identity.Service","link":"blackberry.identity.Service.html","children":[]},{"id":"blackberry.identity.Transport","title":"Transport","alt":"blackberry.identity.Transport","link":"blackberry.identity.Transport.html","children":[]}]},{"id":"blackberry.invoke.AddressBookArguments","title":"Invoke","alt":"blackberry.invoke.AddressBookArguments","subsection":true,"link":"blackberry.invoke.AddressBookArguments.html","children":[{"id":"blackberry.invoke.AddressBookArguments","title":"AddressBookArguments","alt":"blackberry.invoke.AddressBookArguments","link":"blackberry.invoke.AddressBookArguments.html","children":[]},{"id":"blackberry.invoke.BrowserArguments","title":"BrowserArguments","alt":"blackberry.invoke.BrowserArguments","link":"blackberry.invoke.BrowserArguments.html","children":[]},{"id":"blackberry.invoke.CalendarArguments","title":"CalendarArguments","alt":"blackberry.invoke.CalendarArguments","link":"blackberry.invoke.CalendarArguments.html","children":[]},{"id":"blackberry.invoke.CameraArguments","title":"CameraArguments","alt":"blackberry.invoke.CameraArguments","link":"blackberry.invoke.CameraArguments.html","children":[]},{"id":"blackberry.invoke","title":"Invoke","alt":"blackberry.invoke","link":"blackberry.invoke.html","children":[]},{"id":"blackberry.invoke.JavaArguments","title":"JavaArguments","alt":"blackberry.invoke.JavaArguments","link":"blackberry.invoke.JavaArguments.html","children":[]},{"id":"blackberry.invoke.MapsArguments","title":"MapsArguments","alt":"blackberry.invoke.MapsArguments","link":"blackberry.invoke.MapsArguments.html","children":[]},{"id":"blackberry.invoke.MemoArguments","title":"MemoArguments","alt":"blackberry.invoke.MemoArguments","link":"blackberry.invoke.MemoArguments.html","children":[]},{"id":"blackberry.invoke.MessageArguments","title":"MessageArguments","alt":"blackberry.invoke.MessageArguments","link":"blackberry.invoke.MessageArguments.html","children":[]},{"id":"blackberry.invoke.PhoneArguments","title":"PhoneArguments","alt":"blackberry.invoke.PhoneArguments","link":"blackberry.invoke.PhoneArguments.html","children":[]},{"id":"blackberry.invoke.SearchArguments","title":"SearchArguments","alt":"blackberry.invoke.SearchArguments","link":"blackberry.invoke.SearchArguments.html","children":[]},{"id":"blackberry.invoke.TaskArguments","title":"TaskArguments","alt":"blackberry.invoke.TaskArguments","link":"blackberry.invoke.TaskArguments.html","children":[]}]},{"id":"blackberry.io.dir","title":"IO","alt":"blackberry.io.dir","subsection":true,"link":"blackberry.io.dir.html","children":[{"id":"blackberry.io.dir","title":"Directory","alt":"blackberry.io.dir","link":"blackberry.io.dir.html","children":[]},{"id":"blackberry.io.file","title":"File","alt":"blackberry.io.file","link":"blackberry.io.file.html","children":[]},{"id":"blackberry.io.file.FileProperties","title":"FileProperties","alt":"blackberry.io.file.FileProperties","link":"blackberry.io.file.FileProperties.html","children":[]}]},{"id":"blackberry.audio","title":"Media","alt":"blackberry.audio","subsection":true,"link":"blackberry.audio.html","children":[{"id":"blackberry.audio","title":"Audio","alt":"blackberry.audio","link":"blackberry.audio.html","children":[]},{"id":"blackberry.audio.Player","title":"Audio Player","alt":"blackberry.audio.Player","link":"blackberry.audio.Player.html","children":[]},{"id":"blackberry.media.camera","title":"Camera","alt":"blackberry.media.camera","link":"blackberry.media.camera.html","children":[]},{"id":"HTMLAudioElement","title":"HTML5 Audio","alt":"HTMLAudioElement","link":"HTMLAudioElement.html","children":[]},{"id":"HTMLVideoElement","title":"HTML5 Video","alt":"HTMLVideoElement","link":"HTMLVideoElement.html","children":[]},{"id":"blackberry.media.microphone","title":"Microphone","alt":"blackberry.media.microphone","link":"blackberry.media.microphone.html","children":[]}]},{"id":"blackberry.message.Message","title":"Message","alt":"blackberry.message.Message","subsection":true,"link":"blackberry.message.Message.html","children":[{"id":"blackberry.message.Message","title":"Message","alt":"blackberry.message.Message","link":"blackberry.message.Message.html","children":[]},{"id":"blackberry.message.sms","title":"SMS","alt":"blackberry.message.sms","link":"blackberry.message.sms.html","children":[]}]},{"id":"blackberry.payment","title":"Payment","alt":"blackberry.payment","subsection":true,"link":"blackberry.payment.html","children":[{"id":"blackberry.payment","title":"Payment","alt":"blackberry.payment","link":"blackberry.payment.html","children":[]},{"id":"Purchase","title":"Purchase","alt":"Purchase","link":"Purchase.html","children":[]}]},{"id":"blackberry.phone.Phone.Call","title":"Phone","alt":"blackberry.phone.Phone.Call","subsection":true,"link":"blackberry.phone.Phone.Call.html","children":[{"id":"blackberry.phone.Phone.Call","title":"Call","alt":"blackberry.phone.Phone.Call","link":"blackberry.phone.Phone.Call.html","children":[]},{"id":"blackberry.phone.PhoneLogs.CallLog","title":"CallLog","alt":"blackberry.phone.PhoneLogs.CallLog","link":"blackberry.phone.PhoneLogs.CallLog.html","children":[]},{"id":"blackberry.phone.Find.FilterExpression","title":"Find FilterExpression","alt":"blackberry.phone.Find.FilterExpression","link":"blackberry.phone.Find.FilterExpression.html","children":[]},{"id":"blackberry.phone.Phone","title":"Phone","alt":"blackberry.phone.Phone","link":"blackberry.phone.Phone.html","children":[]},{"id":"blackberry.phone.PhoneLogs","title":"PhoneLogs","alt":"blackberry.phone.PhoneLogs","link":"blackberry.phone.PhoneLogs.html","children":[]}]},{"id":"blackberry.pim.Address","title":"PIM","alt":"blackberry.pim.Address","subsection":true,"link":"blackberry.pim.Address.html","children":[{"id":"blackberry.pim.Address","title":"Address","alt":"blackberry.pim.Address","link":"blackberry.pim.Address.html","children":[]},{"id":"blackberry.pim.Appointment","title":"Appointment","alt":"blackberry.pim.Appointment","link":"blackberry.pim.Appointment.html","children":[]},{"id":"blackberry.pim.Attendee","title":"Attendee","alt":"blackberry.pim.Attendee","link":"blackberry.pim.Attendee.html","children":[]},{"id":"blackberry.pim.category","title":"Category","alt":"blackberry.pim.category","link":"blackberry.pim.category.html","children":[]},{"id":"blackberry.pim.Contact","title":"Contact","alt":"blackberry.pim.Contact","link":"blackberry.pim.Contact.html","children":[]},{"id":"blackberry.find.FilterExpression","title":"FilterExpression","alt":"blackberry.find.FilterExpression","link":"blackberry.find.FilterExpression.html","children":[]},{"id":"blackberry.pim.Memo","title":"Memo","alt":"blackberry.pim.Memo","link":"blackberry.pim.Memo.html","children":[]},{"id":"blackberry.pim.Recurrence","title":"Recurrence","alt":"blackberry.pim.Recurrence","link":"blackberry.pim.Recurrence.html","children":[]},{"id":"blackberry.pim.Reminder","title":"Reminder","alt":"blackberry.pim.Reminder","link":"blackberry.pim.Reminder.html","children":[]},{"id":"blackberry.pim.Task","title":"Task","alt":"blackberry.pim.Task","link":"blackberry.pim.Task.html","children":[]}]},{"id":"blackberry.push.Data","title":"Push","alt":"blackberry.push.Data","subsection":true,"link":"blackberry.push.Data.html","children":[{"id":"blackberry.push.Data","title":"Data","alt":"blackberry.push.Data","link":"blackberry.push.Data.html","children":[]},{"id":"blackberry.push","title":"Push","alt":"blackberry.push","link":"blackberry.push.html","children":[]}]},{"id":"blackberry.app","title":"System","alt":"blackberry.app","subsection":true,"link":"blackberry.app.html","children":[{"id":"blackberry.app","title":"Application","alt":"blackberry.app","link":"blackberry.app.html","children":[]},{"id":"blackberry.app.event","title":"Application Event","alt":"blackberry.app.event","link":"blackberry.app.event.html","children":[]},{"id":"Worker","title":"HTML5 Web Workers","alt":"Worker","link":"Worker.html","children":[]},{"id":"blackberry","title":"Network","alt":"blackberry","link":"blackberry.html","children":[]},{"id":"blackberry.system","title":"System","alt":"blackberry.system","link":"blackberry.system.html","children":[]},{"id":"blackberry.system.event","title":"System Event","alt":"blackberry.system.event","link":"blackberry.system.event.html","children":[]}]},{"id":"Element","title":"Touch","alt":"Element","subsection":true,"link":"Element.html","children":[{"id":"Element","title":"HTML5 Element Touch Events","alt":"Element","link":"Element.html","children":[]},{"id":"TouchEvent","title":"HTML5 Touch Event","alt":"TouchEvent","link":"TouchEvent.html","children":[]}]},{"id":"blackberry.ui.dialog","title":"User Interface","alt":"blackberry.ui.dialog","subsection":true,"link":"blackberry.ui.dialog.html","children":[{"id":"blackberry.ui.dialog","title":"Dialog","alt":"blackberry.ui.dialog","link":"blackberry.ui.dialog.html","children":[]},{"id":"blackberry.focus","title":"Focus","alt":"blackberry.focus","link":"blackberry.focus.html","children":[]},{"id":"CanvasRenderingContext2D","title":"HTML5 2D Canvas Context","alt":"CanvasRenderingContext2D","link":"CanvasRenderingContext2D.html","children":[]},{"id":"canvas","title":"HTML5 Canvas","alt":"canvas","link":"canvas.html","children":[]},{"id":"WebGLRenderingContext","title":"HTML5 WebGL Canvas Context","alt":"WebGLRenderingContext","link":"WebGLRenderingContext.html","children":[]},{"id":"blackberry.ui.menu","title":"Menu","alt":"blackberry.ui.menu","link":"blackberry.ui.menu.html","children":[]},{"id":"blackberry.ui.menu.MenuItem","title":"MenuItem","alt":"blackberry.ui.menu.MenuItem","link":"blackberry.ui.menu.MenuItem.html","children":[]}]},{"id":"blackberry.utils.URL","title":"Utilities","alt":"blackberry.utils.URL","subsection":true,"link":"blackberry.utils.URL.html","children":[{"id":"blackberry.utils.URL","title":"URL","alt":"blackberry.utils.URL","link":"blackberry.utils.URL.html","children":[]},{"id":"blackberry.utils","title":"Utils","alt":"blackberry.utils","link":"blackberry.utils.html","children":[]}]}];

menu_link_map = {
"index_menu": "index.html",
"class_menu": "classes.html",
"topics_menu": "topics.html"
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

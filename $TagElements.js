 var w=window,d=w.document

 w.$TagElements=function(s,n){
	var r=0;
	if(s){var m=d.getElementsByTagName(s);if(m.length){n||n===0?(r=m.item(n),r=r?r:0):r=m}};
	return r;
 };

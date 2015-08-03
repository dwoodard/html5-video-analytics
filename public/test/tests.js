test("Basic requirements", function() {
	expect(5);
	ok( Array.prototype.push, "Array.push()" );
	ok( Function.prototype.apply, "Function.apply()" );
	ok( document.getElementById, "getElementById" );
	ok( document.getElementsByTagName, "getElementsByTagName" );
	ok( RegExp, "RegExp" );
});

QUnit.module("Init");
test("va()", function( assert ) {
    var videoEl = document.createElement("video");
	// Basic constructor's behavior
	assert.ok(va, "va");
	assert.ok(va.version, "va.version: " + va.version );
	assert.equal(va(), [], "va()");
	// assert.equal(va([]), [], "va([])");
	// assert.equal(va({}), [{}], "va({})");
	// assert.ok(va('video'), "va('video')");
	// assert.equal(va('video1, #video2, .video3'), ["video1","#video2",".video3"], "va('video1, #video2, .video3')");
	// assert.equal(va('#id'), ['#id'], "va('#id')");
	// assert.equal(va('.class'), ['.class'], "va('.class')");
	// assert.equal(va.version, "1.0.0");

	// assert.equal(va(), , 'message');

});





QUnit.module("Events");
test('test',  function( assert ) {

    ok( 1 == 1, 'one equals one');
})

QUnit.module("Functions");
test('assertions',  function( assert ) {
    ok( 1 == 1, 'one equals one');
})
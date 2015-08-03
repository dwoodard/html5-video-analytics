QUnit.module("Init");
test("va()", function( assert ) {
    var videoEl = document.createElement("video");
	// Basic constructor's behavior
	assert.ok(va, "va");
	assert.ok(va.version, "va.version");
	assert.notOk(va(), "va()");
	assert.ok(va({}), "va({})");
	assert.ok(va('test'), "va('test')");
	assert.equal(va('test1, #test2, .test3'), ["test1","#test2",".test3"], "va('test1, #test2, .test3')");
	assert.equal(va('#id'), ['#id'], "va('#id')");
	assert.equal(va('.class'), ['.class'], "va('.class')");
	assert.equal(va.version, "1.0.0");

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
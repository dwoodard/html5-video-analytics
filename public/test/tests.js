QUnit.module("Init");
test("va()", function( assert ) {
    var videoEl = document.createElement("video");
    console.log(document.body.getElementsByTagName("video"))
	// Basic constructor's behavior
	assert.ok(va, "va");
	assert.ok(va, "va");
	assert.ok(va(), "va()");
	assert.ok(va('[id]'), "va(['test'])");
	assert.ok(va('[class]'), "va(['test'])");

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
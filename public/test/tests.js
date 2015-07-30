QUnit.module("group a");
QUnit.test("Create va object", function( assert ) {

	assert.ok(va());
	assert.ok(va.get('video'));
	console.log(va.get('video'))
	assert.ok(va.get('video'));
});

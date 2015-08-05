// test("Basic requirements", function() {
// 	expect(5);
// 	ok( Array.prototype.push, "Array.push()" );
// 	ok( Function.prototype.apply, "Function.apply()" );
// 	ok( document.getElementById, "getElementById" );
// 	ok( document.getElementsByTagName, "getElementsByTagName" );
// 	ok( RegExp, "RegExp" );
// });

QUnit.module("Init");

test("va()", function (assert) {
    var videoEl1 = document.createElement("video");
    var videoEl2 = document.createElement("video");
    var videoEl3 = document.createElement("video");
    document.body.appendChild(videoEl1);
    document.body.appendChild(videoEl2);
    document.body.appendChild(videoEl3);
    //console.log(document.querySelectorAll('#video2'));
    videoEl2.id = "video2";
    videoEl3.className = "video3";
    // Basic constructor's behavior
    assert.ok(va, "va");
    assert.ok(va.version, "va.version: " + va.version);
    assert.deepEqual(va(['video', '#video2', '.video3']), [videoEl1, videoEl2,videoEl3]);
    assert.equal(va('#video2'), [videoEl2], "va('#id')");
    assert.equal(va('.video3'), [videoEl3], "va('.class')");


});


QUnit.module("Events");
test('test', function (assert) {

    ok(1 == 1, 'one equals one');
})

QUnit.module("Functions");
test('assertions', function (assert) {
    ok(1 == 1, 'one equals one');
})
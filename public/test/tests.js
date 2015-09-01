var videoEl1 = document.createElement("video");
var videoEl2 = document.createElement("video");
var videoEl3 = document.createElement("video");
var videoEl4 = document.createElement("video");

var beforeAfter =  {
    beforeEach: function () {
        // prepare something for all following tests
        document.body.appendChild(videoEl1);
        document.body.appendChild(videoEl2);
        document.body.appendChild(videoEl3);
        document.body.appendChild(videoEl4);

        //console.log(document.querySelectorAll('#video2'));

        videoEl1.src = "http://dev.hva.com/test/buffalo.mp4";
        videoEl2.id = "video2";
        videoEl3.className = "video3";

    },
    afterEach: function () {
        // clean up after each test
        $([videoEl1, videoEl2, videoEl3, videoEl4]).remove();
    }
};

test("Basic requirements", function () {
    ok(Array.prototype.push, "Array.push()");
    ok(Function.prototype.apply, "Function.apply()");
    ok(document.getElementById, "getElementById");
    ok(document.getElementsByTagName, "getElementsByTagName");
    ok(document.querySelectorAll, "document.querySelectorAll");
    ok(RegExp, "RegExp");
});



QUnit.module("Init", beforeAfter);

test("va()", function (assert) {

    // Basic constructor's behavior
    assert.ok(va, "va");
    assert.ok(va.version, "va.version: " + va.version);
    assert.deepEqual(va(['video', '#video2', '.video3']), [videoEl1, videoEl2, videoEl3]);
    assert.ok(va.players.length == 3, "total players should be 3")
    assert.deepEqual(va('#video2'), [videoEl1, videoEl2, videoEl3], "va('#id')");
    assert.deepEqual(va('.video3'), [videoEl1, videoEl2, videoEl3], "va('.class')");
    assert.deepEqual(va('.video3'), [videoEl1, videoEl2, videoEl3], "va('.class') again, Should not add a second time");
    assert.deepEqual(va(videoEl4), [videoEl1, videoEl2, videoEl3, videoEl4], "va({object})");
    assert.ok(va.players.length == 4, "total players should be 4")

});

// QUnit.module("Schema");
// test('compare schema', function (assert) {
//    assert.deepEqual(va.videos, [
//        {
//            "id":"[url]"
//        }
//    ]);
// });


QUnit.module("Video Events", beforeAfter);

test('addEventListener', function (assert) {
    assert.expect( 2 );

    // var emptied = assert.async();
    var loadedmetadata = assert.async();
    var loadeddata = assert.async();


    // video has src
    // assert.ok(!!videoEl1.src, "video has Source");
    // assert.ok(!videoEl2.src, "video has No Source");

    videoEl1.autoplay = false;
    videoEl1.controls = true;

    
         
    videoEl1.play();


    // $(videoEl1).on("emptied", function () {
    //     assert.ok(true, "emptied");
    //     emptied();
    // });
    $(videoEl1).on("loadedmetadata", function () {
        assert.ok(true, "loadedmetadata");
        loadedmetadata();
    });
    $(videoEl1).on("loadeddata", function () {
        assert.ok(true, "loadeddata");
        loadeddata();
    });


    

    
    // $(videoEl1).on("canplay", function () {
    //     assert.ok(true, "canplay");
    // });
    // $(videoEl1).on("canplaythrough", function () {
    //     assert.ok(true, "canplaythrough");
    // });
    // $(videoEl1).on("playing", function () {
    //     assert.ok(true, "playing");
    // });
    // $(videoEl1).on("ended", function () {
    //     assert.ok(true, "ended");
    // });
    // $(videoEl1).on("waiting", function () {
    //     assert.ok(true, "waiting");
    // });
    // $(videoEl1).on("durationchange", function () {
    //     assert.ok(true, "durationchange");
    // });
    // $(videoEl1).on("timeupdate", function () {
    //     assert.ok(true, "timeupdate");
    // });
    // $(videoEl1).on("play", function () {
    //     assert.ok(true, "play");
    // });
    // $(videoEl1).on("pause", function () {
    //     assert.ok(true, "pause");
    // });
    // $(videoEl1).on("ratechange", function () {
    //     assert.ok(true, "ratechange");
    // });
    // $(videoEl1).on("volumechange", function () {
    //     assert.ok(true, "volumechange");
    // });

    //$(videoEl1).remove();
});




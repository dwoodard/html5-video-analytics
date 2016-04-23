var videoEl1 = document.createElement("video");
var videoEl2 = document.createElement("video");
var videoEl3 = document.createElement("video");
var videoEl4 = document.createElement("video");

var beforeAfter = {
    beforeEach: function () {
        // prepare something for all following tests
        document.body.appendChild(videoEl1);
        document.body.appendChild(videoEl2);
        document.body.appendChild(videoEl3);
        document.body.appendChild(videoEl4);

        //console.log(document.querySelectorAll('#video2'));

        videoEl1.src = "/test/testvideo.mp4";
        videoEl2.id = "video2";
        videoEl3.className = "video3";

    },
    afterEach: function () {
        // clean up after each test
        $([videoEl1, videoEl2, videoEl3, videoEl4]).remove();
    }
};

test("Basic requirements", function () {
    ok(Array.prototype.push, "Has Array.push()");
    ok(Function.prototype.apply, "Has Function.apply()");
    ok(document.getElementById, "Has getElementById");
    ok(document.getElementsByTagName, "Has getElementsByTagName");
    ok(document.querySelectorAll, "Has document.querySelectorAll");
    ok(RegExp, "Has RegExp");
});


QUnit.module("Init", beforeAfter);
test("va()", function (assert) {

    // Basic constructor's behavior
    assert.ok(va, "va");
    assert.ok(va.version, "va.version: " + va.version);
    assert.deepEqual(va(['video', '#video2', '.video3']), [videoEl1, videoEl2, videoEl3]);
    assert.ok(va.players.length == 3, "total players should be 3");
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
    assert.expect(8);

    // var emptied = assert.async();
    var durationchange = assert.async();
    var loadedmetadata = assert.async();
    var loadeddata = assert.async();
    var canplay = assert.async();
    var canplaythrough = assert.async();
    var volumechange = assert.async();
    var playing1 = 0;
    var playing2 = assert.async();
    var pause1 = 0;
    var pause2 = assert.async();
    var ended = assert.async();


    videoEl1.autoplay = true;
    videoEl1.controls = true;

    setTimeout(function () {
        assert.equal(Math.floor(videoEl1.duration), 11, 'duration is 11 seconds')
    }, 1000);
    setTimeout(function () {
        videoEl1.volume = .05;
    }, 300);
    setTimeout(function () {
        videoEl1.playbackRate = 2;
    }, 1000);
    setTimeout(function () {
        videoEl1.pause();
    }, 4250);
    setTimeout(function () {
        videoEl1.play();
    }, 4800);


    $(videoEl1).on("loadedmetadata", function () {
        loadedmetadata();
        assert.ok(true, "loadedmetadata");
    });

    $(videoEl1).on("loadeddata", function () {
        loadeddata();
        assert.ok(true, "loadeddata");
    });

    //$(videoEl1).on("play", function () {
    //    assert.ok(true, 'play')
    //});

    //
    //$(videoEl1).on("pause", function () {
    //    assert.ok(true, 'pause')
    //});

    $(videoEl1).on("canplay", function () {
        canplay();
        assert.ok(true, "canplay");
    });

    $(videoEl1).on("canplaythrough", function () {
        canplaythrough();
        assert.ok(true, "canplaythrough");
    });

    $(videoEl1).on("durationchange", function () {
        durationchange();
        assert.ok(true, "durationchange");
    });
    $(videoEl1).on("volumechange", function () {
        volumechange();
        assert.ok(true, "volumechange");
    });

    $(videoEl1).on("ended", function () {
        assert.ok(true, "ended");
        ended();
        playing2();
        pause2();
        $(videoEl1).remove();
        $(".tc-videoController").remove()
    });


});




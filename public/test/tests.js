test("Basic requirements", function() {
	expect(5);
	ok( Array.prototype.push, "Array.push()" );
	ok( Function.prototype.apply, "Function.apply()" );
	ok( document.getElementById, "getElementById" );
	ok( document.getElementsByTagName, "getElementsByTagName" );
    ok( RegExp, "RegExp" );


});

var videoEl1 = document.createElement("video");
var videoEl2 = document.createElement("video");
var videoEl3 = document.createElement("video");
var videoEl4 = document.createElement("video");

QUnit.module("Init", {
    beforeEach: function() {
        // prepare something for all following tests
        document.body.appendChild(videoEl1);
        document.body.appendChild(videoEl2);
        document.body.appendChild(videoEl3);
        document.body.appendChild(videoEl4);
        //console.log(document.querySelectorAll('#video2'));
        videoEl1.src = "test.mp4";
        videoEl2.id = "video2";
        videoEl3.className = "video3";

    },
    afterEach: function() {
        // clean up after each test
        $([videoEl1, videoEl2, videoEl3, videoEl4]).remove();
    }
});

test("va()", function (assert) {

    // Basic constructor's behavior
    assert.ok(va, "va");
    assert.ok(va.version, "va.version: " + va.version);
    assert.deepEqual(va(['video', '#video2', '.video3']), [videoEl1, videoEl2,videoEl3]);
    assert.deepEqual(va('#video2'), [videoEl1, videoEl2,videoEl3], "va('#id')");
    assert.deepEqual(va('.video3'), [videoEl1, videoEl2,videoEl3], "va('.class')");
    assert.deepEqual(va('.video3'), [videoEl1, videoEl2,videoEl3], "va('.class') again");
    assert.deepEqual(va(videoEl4), [videoEl1, videoEl2,videoEl3, videoEl4], "va({object})");

});

QUnit.module("Schema");
test('compares schema to ', function (assert) {
    assert.deepEqual(va.videos, {});
});


QUnit.module("Video Events");

test('addEventListener', function (assert) {
    // assert.expect( 16 );

    // video has src
    assert.ok(!!videoEl1.src, "video has Source");
    // assert.ok(!videoEl2.src, "video has No Source");

    videoEl1.autoplay = false;
    videoEl1.controls=true;
    videoEl1.play();
    $(videoEl1).on( "emptied", function() {
        assert.ok( true, "emptied");
    });
    $(videoEl1).on( "loadedmetadata", function() {
        assert.ok( true, "loadedmetadata");
    });
    $(videoEl1).on( "loadeddata", function() {
        assert.ok( true, "loadeddata");
    });
    $(videoEl1).on( "canplay", function() {
        assert.ok( true, "canplay");
    });
    $(videoEl1).on( "canplaythrough", function() {
        assert.ok( true, "canplaythrough");
    });
    $(videoEl1).on( "playing", function() {
        assert.ok( true, "playing");
    });
    $(videoEl1).on( "ended", function() {
        assert.ok( true, "ended");
    });
    $(videoEl1).on( "waiting", function() {
        assert.ok( true, "waiting");
    });
    $(videoEl1).on( "durationchange", function() {
        assert.ok( true, "durationchange");
    });
    $(videoEl1).on( "timeupdate", function() {
        assert.ok( true, "timeupdate");
    });
    $(videoEl1).on( "play", function() {
        assert.ok( true, "play");
    });
    $(videoEl1).on( "pause", function() {
        assert.ok( true, "pause");
    });
    $(videoEl1).on( "ratechange", function() {
        assert.ok( true, "ratechange");
    });
    $(videoEl1).on( "volumechange", function() {
        assert.ok( true, "volumechange");
    });


    $(videoEl1).trigger("emptied");
    $(videoEl1).trigger("loadedmetadata");
    $(videoEl1).trigger("loadeddata");
    $(videoEl1).trigger("canplay");
    $(videoEl1).trigger("canplaythrough");
    $(videoEl1).trigger("playing");
    $(videoEl1).trigger("waiting");
    $(videoEl1).trigger("ended");
    $(videoEl1).trigger("durationchange");
    $(videoEl1).trigger("timeupdate");
    $(videoEl1).trigger("play");
    $(videoEl1).trigger("pause");
    $(videoEl1).trigger("ratechange");
    $(videoEl1).trigger("volumechange");

    $(videoEl1).remove();
});




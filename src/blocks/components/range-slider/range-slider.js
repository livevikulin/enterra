import $ from 'jquery';
import 'ion-rangeslider';


let $range = $(".slider"),
	$input = $(".field"),
	$minus = $(".js-minus"),
	$plus = $(".js-plus"),
	$minBtn = $(".js-min"),
	$maxBtn = $(".js-max"),
	$halfBtn = $(".js-half"),
	$money = parseFloat($(".js-money").text()),
    instance,
    min = 0,
    max = $money;

$range.ionRangeSlider({
    type: "single",
    min: min,
    max: max,
    from: 500,
    onStart: function(data) {
        $input.prop("value", data.from);
    },
    onChange: function(data) {
        $input.prop("value", data.from);
    }
});

instance = $range.data("ionRangeSlider");

$input.on("change keyup", function() {
    let val = $(this).prop("value");
    // validate
    if (val < min) {
        val = min;
    } else if (val > max) {
        val = max;
    }

    instance.update({
        from: val
	});
});

$minus.on('click', function() {
	let	count = parseInt($input.val()) - 10;

	count = count < 1 ? 1 : count;
	$input.val(count);
	$input.change();
	return false;
});

$plus.click(function () {
	let	count = parseInt($input.val()) + 10;

	count = count > max ? max : count;
	$input.val(count);
	$input.change();
	return false;
});

$minBtn.on('click', function() {
	$input.val(min);
});

$maxBtn.on('click', function() {
	$input.val(max);
});

$halfBtn.on('click', function() {
	$input.val(max / 2);
});


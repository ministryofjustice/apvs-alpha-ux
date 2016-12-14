/* global $ */
/* global GOVUK */

function ShowHideContent() {
    var self = this

    self.escapeElementName = function(str) {
        var result = str.replace('[', '\\[').replace(']', '\\]')
        return (result)
    }

    self.showHideRadioToggledContent = function() {
        $(".block-label input[type='radio']").each(function() {
            var $radio = $(this)
            var $radioGroupName = $radio.attr('name')
            var $radioLabel = $radio.parent('label')

            var dataTarget = $radioLabel.attr('data-target')

            // Add ARIA attributes

            // If the data-target attribute is defined
            if (dataTarget) {
                // Set aria-controls
                $radio.attr('aria-controls', dataTarget)

                $radio.on('click', function() {
                    // Select radio buttons in the same group
                    $radio.closest('form').find('.block-label input[name=' + self.escapeElementName($radioGroupName) + ']').each(function() {
                        var $this = $(this)

                        var groupDataTarget = $this.parent('label').attr('data-target')
                        var $groupDataTarget = $('#' + groupDataTarget)

                        // Hide toggled content
                        $groupDataTarget.addClass('js-hidden')
                            // Set aria-expanded and aria-hidden for hidden content
                        $this.attr('aria-expanded', 'false')
                        $groupDataTarget.attr('aria-hidden', 'true')
                    })

                    var $dataTarget = $('#' + dataTarget)
                    $dataTarget.removeClass('js-hidden')
                        // Set aria-expanded and aria-hidden for clicked radio
                    $radio.attr('aria-expanded', 'true')
                    $dataTarget.attr('aria-hidden', 'false')
                })
            } else {
                // If the data-target attribute is undefined for a radio button,
                // hide visible data-target content for radio buttons in the same group

                $radio.on('click', function() {
                    // Select radio buttons in the same group
                    $('.block-label input[name=' + self.escapeElementName($radioGroupName) + ']').each(function() {
                        var groupDataTarget = $(this).parent('label').attr('data-target')
                        var $groupDataTarget = $('#' + groupDataTarget)

                        // Hide toggled content
                        $groupDataTarget.addClass('js-hidden')
                            // Set aria-expanded and aria-hidden for hidden content
                        $(this).attr('aria-expanded', 'false')
                        $groupDataTarget.attr('aria-hidden', 'true')
                    })
                })
            }
        })
    }
    self.showHideCheckboxToggledContent = function() {
        $(".block-label input[type='checkbox']").each(function() {
            var $checkbox = $(this)
            var $checkboxLabel = $(this).parent()

            var $dataTarget = $checkboxLabel.attr('data-target')

            // Add ARIA attributes

            // If the data-target attribute is defined
            if (typeof $dataTarget !== 'undefined' && $dataTarget !== false) {
                // Set aria-controls
                $checkbox.attr('aria-controls', $dataTarget)

                // Set aria-expanded and aria-hidden
                $checkbox.attr('aria-expanded', 'false')
                $('#' + $dataTarget).attr('aria-hidden', 'true')

                // For checkboxes revealing hidden content
                $checkbox.on('click', function() {
                    var state = $(this).attr('aria-expanded') === 'false'

                    // Toggle hidden content
                    $('#' + $dataTarget).toggleClass('js-hidden')

                    // Update aria-expanded and aria-hidden attributes
                    $(this).attr('aria-expanded', state)
                    $('#' + $dataTarget).attr('aria-hidden', !state)
                })
            }
        })
    }
}

$(document).ready(function() {
    // Use GOV.UK selection-buttons.js to set selected
    // and focused states for block labels
    var $blockLabels = $(".block-label input[type='radio'], .block-label input[type='checkbox']")
    new GOVUK.SelectionButtons($blockLabels) // eslint-disable-line

    // Show and hide toggled content
    // Where .block-label uses the data-target attribute
    var toggleContent = new ShowHideContent()
    toggleContent.showHideRadioToggledContent()
    toggleContent.showHideCheckboxToggledContent()

    var availableTags = [
        "Ashfield",
        "Altcourse",
        "Askham Grange",
        "Aylesbury",
        "Bedford",
        "Bristol",
        "Leeds",
        "Leicester",
        "Liverpool",
        "Maidstone",
        "Oakwood",
        "Thameside",
        "Stocken",
        "Rye Hill",
        "Stafford",
        "Featherstone",
        "Belmarsh",
        "Hewell",
        "Birmingham"
    ];
    $(".autocomplete").autocomplete({
        source: availableTags
    });

    $(".advanced-search").click(function() {
        if ($(".prison").is(":hidden")) {
            $(".nameAndNI").slideDown("slow");
            $(".prison").slideDown("slow");
            $(".status").slideDown("slow");
            $(".approvalAndType").slideDown("slow");
            $(".searchSection").slideDown("slow");
            $(".advanced-search").hide();
            $(".refNumber a").hide();
            $(".advanced-more").show();
        } else {
            $(".prison").hide();
        }
    });

    $(".advanced-more").click(function() {
        if ($(".geography").is(":hidden")) {
            $(".geography").slideDown("slow");
            $(".variousDates").slideDown("slow");
            $(".advanced-more").hide();
        } else {
            $(".prison").hide();
        }
    });

    $(".search").click(function() {
        if ($(".prison").is(":visible")) {
            $(".nameAndNI").slideUp("slow");
            $(".prison").slideUp("slow");
            $(".status").slideUp("slow");
            $(".approvalAndType").slideUp("slow");
            $(".searchSection").slideUp("slow");
            $(".geography").slideUp("slow");
            $(".variousDates").slideUp("slow");
            $(".newTab a").removeClass("active");
            $(".searchResults").slideDown("slow");
            $(".searchResults a").addClass("active");
            $(".newTab").slideUp("slow");
            $(".inProgressTab").slideUp("slow");
            $(".updatedTab").slideUp("slow");

            $(".refNumber a").show();
            $(".refNumber .advanced-download").slideDown("slow");
            $(".advanced-download").slideDown("slow");
        } else {

            for (var i = 0 in referenceNumbers) {
                $("." + referenceNumbers[i]).show();
                $(".searchResults span").text("8");
            }
        }
    });

    $(function() {
        $("#datepicker1").datepicker();
        $("#datepicker2").datepicker();
        $("#dateOfVisit").datepicker();
        $("#submissionDate").datepicker();
        $("#approvalDate").datepicker();
        $("#rejectionDate").datepicker();

    });


    var referenceNumbers = [];
    $('table .ref').each(function() {
        referenceNumbers.push($(this).html());
    });

    $(".refNumber .search").click(function() {
        var searchInput = $('#input-refNumber').val();
        for (var i = 0 in referenceNumbers) {
            if (searchInput == referenceNumbers[i]) {
                $("." + referenceNumbers[i]).show();
                $(".newTab a").removeClass("active");
                $(".searchResults").slideDown("slow");
                $(".searchResults a").addClass("active");
                $(".newTab").slideUp("slow");
                $(".inProgressTab").slideUp("slow");
                $(".updatedTab").slideUp("slow");
                $(".searchResults span").text(1);
            } else {
              $("." + referenceNumbers[i]).hide();
              $(".newTab a").removeClass("active");
              $(".searchResults").slideDown("slow");
              $(".searchResults a").addClass("active");
              $(".newTab").slideUp("slow");
              $(".inProgressTab").slideUp("slow");
              $(".updatedTab").slideUp("slow");
              $(".searchResults span").text(0);
            }
        }
    });

    $("#select-day")
        .change(function() {
            var selectedDay = "";
            $("#select-day option:selected").each(function() {
                selectedDay += $(this).text() + "";
            });
            if (selectedDay == "Today") {
                $(".block1 .number").text(Math.floor((Math.random() * 10) + 1));
                $(".block2 .number").text(Math.floor((Math.random() * 10) + 1));
                $(".block3 .number").text(Math.floor((Math.random() * 10) + 1));
                $(".block4 .number").text(Math.floor((Math.random() * 10) + 1));
                $(".block5 .number").text(Math.floor((Math.random() * 10) + 1));
                $(".block6 .number").text(Math.floor((Math.random() * 3)));
            } else if (selectedDay == "Yesterday") {
                $(".block1 .number").text("12");
                $(".block2 .number").text("7");
                $(".block3 .number").text("3");
                $(".block4 .number").text("4");
                $(".block5 .number").text("5");
                $(".block6 .number").text("0");
            } else if (selectedDay == "Last week") {
                $(".block1 .number").text("60");
                $(".block2 .number").text("16");
                $(".block3 .number").text("40");
                $(".block4 .number").text("12");
                $(".block5 .number").text("45");
                $(".block6 .number").text("12");
            } else if (selectedDay == "Last month") {
                $(".block1 .number").text("120");
                $(".block2 .number").text("33");
                $(".block3 .number").text("88");
                $(".block4 .number").text("23");
                $(".block5 .number").text("80");
                $(".block6 .number").text("20");
            }
        })
        .change();

    $("#select-month")
        .change(function() {
            var selectedMonth = "";
            $("#select-month option:selected").each(function() {
                selectedMonth += $(this).text() + "";
            });
            if (selectedMonth == "December") {
                $(".block1 .number").text("120");
                $(".block2 .number").text("33");
                $(".block3 .number").text("88");
                $(".block4 .number").text("23");
                $(".block5 .number").text("80");
                $(".block6 .number").text("20");
            } else if (selectedMonth == "January") {
                $(".block1 .number").text("123");
                $(".block2 .number").text("30");
                $(".block3 .number").text("70");
                $(".block4 .number").text("70");
                $(".block5 .number").text("78");
                $(".block6 .number").text("21");
            } else if (selectedMonth == "November") {
                $(".block1 .number").text("140");
                $(".block2 .number").text("46");
                $(".block3 .number").text("90");
                $(".block4 .number").text("18");
                $(".block5 .number").text("70");
                $(".block6 .number").text("16");
            }
        })
        .change();
});

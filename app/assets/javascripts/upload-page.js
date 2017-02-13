$(function () {
  $('#remove-file-upload').hide()
  if (/Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.getElementById('choose-file').innerHTML = 'Capture image'
    document.getElementById('device').innerHTML = 'Capturing using the camera on your tablet or phone is the quickest and easiest way of doing this. Just follow the four simple steps below.'
    $('.mobile-instruction').show()
    $('.instruction').hide()
  } else {
    $('.instruction').show()
    $('.mobile-instruction').hide()
    document.getElementById('choose-file').innerHTML = 'Choose image'
    document.getElementById('device').innerHTML = 'Provide a receipt or a copy of your tickets. Scan or photograph each one. Then transfer images or connect device to your computer. Finally tap “Choose image” and locate the image of the requested item'
  }
})

$('#document').change(function () {
  var document = $('#document').val().replace(/\\/g, '/').replace(/.*\//, '')
  if (document) {
    $('#alternative').hide()
    $('#document-name').html(document).addClass('text-success')
    $('#choose-file').hide()
    $('#label').hide()
    $('#remove-file-upload').show()
    $('.mobile-instruction').hide()
    $('.instruction').hide()
    $('.text-top').hide()
    previewFile()
  }
})

function previewFile () {
  var file = document.querySelector('input[type=file]').files[0]
  var reader = new FileReader()

  reader.addEventListener('load', function () {
    var readerResult = reader.result
    var fileTypeStart = readerResult.indexOf(':') + 1
    var fileTypeEnd = readerResult.indexOf('/')
    var fileType = readerResult.substring(fileTypeStart, fileTypeEnd)
    if (fileType === 'image') {
      var filePreview = document.getElementById('document-preview')
      filePreview.src = reader.result
      filePreview.style.display = 'block'
      filePreview.style.visibility = 'visible'

      var filePreviewTextElements = document.getElementsByClassName('document-preview-text')
      for (var i = 0; i < filePreviewTextElements.length; i++) {
        var textElement = filePreviewTextElements[i]
        textElement.style.display = 'block'
        textElement.style.visibility = 'visible'
      }
    }
  }, false)

  if (file) {
    reader.readAsDataURL(file)
  }
}

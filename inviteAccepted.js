function conversationStarted(conversation) {
    var dialog = conversation._dialogs.values().next().value;
    var peerConnection = dialog.session.mediaHandler.peerConnection;

    console.log(peerConnection);

        // Mute the local media's audio.
    var localMedia = conversation.localMedia;
    localMedia.mute();
}

function onInviteAccepted(conversation) {
  conversation.localMedia.attach('#local');

  conversation.on('participantConnected', function(participant) {
    participant.media.attach('#remote');

    conversationStarted(conversation);
  });
}

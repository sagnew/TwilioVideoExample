function conversationStarted(conversation) {
  // Here is where you add your own custom functionality.
  console.log('The conversation has started.');
}

function onInviteAccepted(conversation) {
  conversation.localMedia.attach('#local');

  conversation.on('participantConnected', function(participant) {
    participant.media.attach('#remote');

    conversationStarted(conversation);
  });
}

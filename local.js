var accessToken = 'GRAB THIS FROM YOUR TWILIO DASHBOARD';
var accessManager = Twilio.AccessManager(accessToken);
var client = Twilio.Conversations.Client(accessManager);

// Begin listening for invites to Twilio Video conversations.
client.listen().then(function() {
  client.on('invite', function(invite) {
    invite.accept().then(onInviteAccepted);
  });
});

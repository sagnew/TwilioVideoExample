var accessToken = 'GENERATE THIS FROM YOUR TWILIO DASHBOARD';
var accessManager = new Twilio.AccessManager(accessToken);
var client = new Twilio.Conversations.Client(accessManager);

client.inviteToConversation('Identity used for first token').then(onInviteAccepted);

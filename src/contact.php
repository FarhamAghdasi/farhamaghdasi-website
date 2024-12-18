<?php
// Get the JSON data from the request
$data = json_decode(file_get_contents("php://input"), true);

// Telegram Bot API Token and Chat ID
$botToken = "";
$chatId = "";

// Create the message text
$message = "New contact form submission:\n";
$message .= "Name: " . $data['name'] . "\n";
$message .= "Email: " . $data['email'] . "\n";
$message .= "Subject: " . $data['subject'] . "\n";
$message .= "Message: " . $data['message'] . "\n";

// Send the message to Telegram
$response = file_get_contents("https://api.telegram.org/bot$botToken/sendMessage?chat_id=$chatId&text=" . urlencode($message));

// Return response to React
if ($response) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false]);
}
?>

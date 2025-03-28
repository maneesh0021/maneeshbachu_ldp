
def encrypt_message(message):
    encrypted_text = ""
    for char in message:
        if char.islower():  # Shift lowercase letters by 3
            encrypted_text += chr(((ord(char) - ord('a') + 3) % 26) + ord('a'))
        elif char.isupper():  # Shift uppercase letters by 5
            encrypted_text += chr(((ord(char) - ord('A') + 5) % 26) + ord('A'))
        elif char.isdigit():  # Complement digits (0 -> 9, 1 -> 8, etc.)
            encrypted_text += str(9 - int(char))
        else:  # For special characters, shift ASCII value by +2
            encrypted_text += chr(ord(char) + 2)
    return encrypted_text

def decrypt_message(encrypted_text):
    decrypted_text = ""
    for char in encrypted_text:
        if char.islower():
            decrypted_text += chr(((ord(char) - ord('a') - 3) % 26) + ord('a'))
        elif char.isupper():
            decrypted_text += chr(((ord(char) - ord('A') - 5) % 26) + ord('A'))
        elif char.isdigit():
            decrypted_text += str(9 - int(char))
        else:
            decrypted_text += chr(ord(char) - 2)
    return decrypted_text

# Example Usage
message = "Hello@123"
encoded = encrypt_message(message)
decoded = decrypt_message(encoded)

print("Original Message:", message)
print("Encoded Message:", encoded)
print("Decoded Message:", decoded)

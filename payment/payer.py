import cv2
import zbar


def scan_qr():
    cap = cv2.VideoCapture(0)
    scanner = zbar.Scanner()

    while True:
        _, frame = cap.read()
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        results = scanner.scan(gray)
        if results:
            qr_data = results[0].data.decode('utf-8')
            return qr_data
        cv2.imshow('QR Scanner', frame)

    cap.release()
    cv2.destroyAllWindows()


qr_data = scan_qr()
qr_parts = qr_data.split(':')
enterprise_wallet_address = qr_parts[1].split('?')[0]
social_coins_amount = int(qr_parts[1].split('=')[1])
print("Shop owner's wallet address:", enterprise_wallet_address)
print("Social coins needed:", social_coins_amount)

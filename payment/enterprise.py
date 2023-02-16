import qrcode


def rs_social_coins(rs_amount):
    # Your conversion function here
    social_coins_amount = rs_amount/10
    return social_coins_amount


def qr_creator(rupees,enterprise_wallet_address):

    social_coins_amount = rs_social_coins(rupees)
    qr_data = f"sc:{enterprise_wallet_address}?amt={social_coins_amount}"
    qr = qrcode.QRCode(version=1, box_size=10, border=5)
    qr.add_data(qr_data)
    qr.make(fit=True)

    # Generate the QR code image
    img = qr.make_image(fill_color="black", back_color="white")
    img.save("qr_code.png")

    # Display the QR code image
    img.show()

addrs= "hfgcgchgchfcgfxgfx"
qr_creator(100,addrs)

    //Start function
const start = async function() {
    const requestOptions = {
      //Filter on devices with the vendor ID.
      //filters: [{ vendorId: 0x2341 }],
    };

    // Request an COM port from the user.
    port = await navigator.serial.requestPort(requestOptions);
	
    // Open port.
    await port.open({
      baudrate: 2400
    });
	
    // Writing to port.
    const encoder = new TextEncoder();
    const writer = port.writable.getWriter();
    writer.write(encoder.encode(decodeURI('%1B%51%41%31%2E%31%2E%31%2E%39%20%20%20%20%20%20%0D')));
}

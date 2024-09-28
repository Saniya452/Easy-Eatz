import React, { useState, useEffect } from "react";
import { Text, View, Button } from "react-native";
import { Camera, CameraView } from 'expo-camera';
import styles from './styles'; 
import HomeIndicator from "../../components/Home Indicator";
import { StatusBar } from "expo-status-bar"; 

export default function ScannerScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getCameraPermissions();
  }, []);

  const handleBarcodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  }

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
       <StatusBar backgroundColor="#F7572C" style="light" />

       <View style={styles.topMargin} />
      <CameraView
        onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ["qr", "pdf417"],
        }}
        style={styles.cameraView}
      />
              <View style={styles.scanBox} />
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
      <View style={styles.bottomMargin}>
        <HomeIndicator />
      </View>
    </View>
  );
}


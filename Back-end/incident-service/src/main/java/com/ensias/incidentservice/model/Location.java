package com.ensias.incidentservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

@Data
@AllArgsConstructor
public class Location {
    private double latitude;
    private double longitude;

    public double calculateDistance(Location otherLocation) {
        // Simplified calculation for demonstration purposes
        double lat1 = Math.toRadians(latitude);
        double lon1 = Math.toRadians(longitude);
        double lat2 = Math.toRadians(otherLocation.getLatitude());
        double lon2 = Math.toRadians(otherLocation.getLongitude());

        double earthRadius = 6371; // Radius of the Earth in kilometers

        double dLat = lat2 - lat1;
        double dLon = lon2 - lon1;

        double a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return earthRadius * c;
    }
}

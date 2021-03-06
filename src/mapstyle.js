const mapStyle = [
  {
    stylers: [
      {
        visibility: "off",
      },
    ],
  },

  {
    featureType: "water",
    stylers: [
      {
        visibility: "on",
      },
      {
        color: "#2f343b",
      },
    ],
  },
  {
    featureType: "landscape",
    stylers: [
      {
        visibility: "on",
      },
      {
        color: "#703030",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [
      {
        visibility: "on",
      },
      {
        color: "#2f343b",
      },
      {
        weight: 1,
      },
    ],
  },
]

export default mapStyle

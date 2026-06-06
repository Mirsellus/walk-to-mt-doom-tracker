// Walk to Mount Doom — plotted route.
// Coords are full-res pixel positions on LOTROmap.png (14150 x 11600).
// fromKm/toKm = cumulative kilometres at each section's start/end (the ★ stage landmarks).
window.ROUTE = {
  sections: [
    {
      name: "Bag End → Rivendell", stage: 1, fromKm: 0, toKm: 737,
      waypoints: [
        [2414, 3517],  // Bag End (start)
        [2674, 3817],  // First night's camp
        [2752, 3853],  // Woody End (added)
        [2830, 3810],  // Farmer Maggot's farm
        [2943, 3769],
        [3007, 3720],
        [3167, 3722],
        [3292, 3720],
        [3435, 3682],
        [3678, 3530],
        [4070, 3656],
        [4574, 3627],
        [5419, 3768],
        [5740, 3636],
        [6211, 3712],
        [6674, 3532]   // Rivendell (Last Homely House)
      ]
    },
    {
      name: "Rivendell → Lothlórien", stage: 2, fromKm: 737, toKm: 1481,
      waypoints: [
        [6674, 3532],  // Rivendell
        [5925, 4234],
        [6535, 4608],
        [6652, 4902],
        [7036, 4584],
        [7359, 4500],
        [7769, 4736],
        [8139, 4720]   // Lothlórien
      ]
    },
    {
      name: "Lothlórien → Rauros Falls", stage: 3, fromKm: 1481, toKm: 2107,
      waypoints: [
        [8139, 4720],  // Lothlórien
        [9543, 6483],
        [9385, 6992],
        [9338, 7454],
        [9603, 7538]   // Rauros Falls
      ]
    },
    {
      name: "Rauros Falls → Mount Doom", stage: 4, fromKm: 2107, toKm: 2863,
      waypoints: [
        [9603, 7538],   // Rauros Falls
        [10228, 7620],
        [11001, 7528],
        [11401, 7801],
        [11311, 8574],
        [11429, 9542],
        [11845, 9518],
        [12227, 9346],
        [11926, 8222],
        [12950, 8758]   // Mount Doom
      ]
    }
  ]
};

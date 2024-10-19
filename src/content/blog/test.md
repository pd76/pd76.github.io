---
title:  "Testing Post"
created: "2023-01-22"
updated: "2023-01-22"
topic: bookmark
author: "Spencer Wright"
source: "https://www.scopeofwork.net/on-documentation/?ref=scope-of-work-newsletter"
published: true
---
Here's a demo markdown text showcasing various elements, using a story about space exploration as the content:

# The Future of Space Exploration

## Introduction

As humanity looks to the stars, we find [ourselves](/journal) on the [brink](https://example.com) of a new era in space exploration. From the first steps on the Moon to the possibility of colonizing Mars, our journey through the cosmos continues to inspire and challenge us.

### The Early Days

The space race began in earnest with the launch of Sputnik 1 in 1957. This simple satellite sparked a competition that would lead to one of humanity's greatest achievements:

> "That's one small step for man, one giant leap for mankind." - Neil Armstrong

## Current Missions

Today, space agencies and private companies around the world are pushing the boundaries of what's possible. Some key projects include:

1. Mars Exploration
2. Asteroid Mining
3. Exoplanet Discovery

### Mars Exploration

The red planet has long captivated our imagination. Current missions include:

- NASA's Perseverance Rover
- China's Tianwen-1
- UAE's Hope Orbiter

Here's a simple Python function to calculate the distance between Earth and Mars:

```python
def earth_mars_distance(earth_pos, mars_pos):
    """
    Calculate the distance between Earth and Mars.
    
    :param earth_pos: tuple of (x, y, z) coordinates for Earth
    :param mars_pos: tuple of (x, y, z) coordinates for Mars
    :return: distance in kilometers
    """
    import math
    
    dx = earth_pos[0] - mars_pos[0]
    dy = earth_pos[1] - mars_pos[1]
    dz = earth_pos[2] - mars_pos[2]
    
    return math.sqrt(dx**2 + dy**2 + dz**2)

# Example usage
earth = (1, 0, 0)  # Simplified coordinates
mars = (1.5, 0, 0)
distance = earth_mars_distance(earth, mars)
print(f"The distance between Earth and Mars is approximately {distance:.2f} AU")
```

## Future Prospects

The future of space exploration[^1] is bright, with ambitious plans including:

- Lunar Gateway
- Artemis Program
- SpaceX Starship

| Mission | Target | Estimated Launch |
|---------|--------|------------------|
| Artemis 3 | Moon | 2025 |
| Mars Sample Return | Mars | 2028 |
| Europa Clipper | Jupiter's Moon Europa | 2024 |

### The Search for Extraterrestrial Life

One of the most exciting aspects[^2] of space exploration is the potential to discover life beyond Earth. This search is guided by the Drake Equation:
```python
$$N = R_* \cdot f_p \cdot n_e \cdot f_l \cdot f_i \cdot f_c \cdot L$$

Where:
- $N$ is the number of civilizations in our galaxy with which communication might be possible
- $R_*$ is the average rate of star formation in our galaxy
- $f_p$ is the fraction of those stars that have planets
- $n_e$ is the average number of planets that can potentially support life per star that has planets
- $f_l$ is the fraction of planets that could support life that actually develop life at some point
- $f_i$ is the fraction of planets with life that actually go on to develop intelligent life
- $f_c$ is the fraction of civilizations that develop a technology that releases detectable signs of their existence into space
- $L$ is the length of time for which such civilizations release detectable signals into space
```
## Conclusion

As we continue to explore the cosmos, we're not just reaching for the stars - we're reaching for a deeper understanding of our place in the universe. The journey ahead is long, but the potential discoveries are limitless.

---

*"The Earth is the cradle of humanity, but mankind cannot stay in the cradle forever."* - Konstantin Tsiolkovsky

[^1]: Hello world, this is a footnote!
[^2]: Here's another footnote, yay

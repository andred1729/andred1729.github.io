---
layout: page
title: handGantry
description: glove controlled gantry
img: assets/img/gantry.png
importance: 1
category: past
giscus_comments: false
---

We made this for MakeHarvard 2025. I’ve been interested in teleoperation for a while, and while we were ideating, the idea of a flex glove controlling a robot developed. Initially, we were going to make a wheel-propelled robot that you could manipulate by moving your fingers, but we deemed that idea unintuitive and unnecessarily complicated. We then landed on our final concept: integrating flex sensors into a glove and hand-crafting a gantry to be controlled by the glove.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/glove.jpeg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Sowing in the Flex Sensors Into the Glove + Tape.
</div>

We got so lucky with the flex sensors: since the venue supplies only had one (and it was somewhat dubious), we rushed to the nearest Microcenter and found exactly three of the same sensors in stock (we were so fortunate).

The perfect integration with the gloves (which we also bought at Microcenter) was achieved by taping the sensor to the base of each finger and sewing along the finger’s body. The tape cemented the flex sensor in the correct position, and the sewing was flexible and malleable enough to allow the finger to curl naturally!

Here is the gantry we built parallel to the glove:

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/gantry.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

It was quite an ordeal to build this. We constructed the frame from extrusions, but all of them were too long, so we went to the maker center and used a hand saw to cut each of the eight pieces. To make matters worse, the available angle brackets were too big (probably meant for a thicker extrusion gauge); they were so thick we couldn’t connect them to the extrusions, so we drilled out the screw holes, removing enough metal to allow the screws to reach the other side.

We were working seconds before the deadline and just got it together in time. Here is the result:

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/gantry.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>


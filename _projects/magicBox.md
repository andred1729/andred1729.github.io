---
layout: page
title: magicBox
description: neural network powered pattern recognition lock-box
img: assets/img/magicBox.png
importance: 2
category: past
giscus_comments: false
---

We made this for MakeHarvard 2024. At the beginning of the competition, we had no idea what to do. We spent the first hour ideating. We started talking about something to detect patterns with the hand, and then we came up with a box running a neural network that detects the old nursery tapping pattern "tan--tan-tan-tan-tan -- tan -- tan."

Since we were already starting late, we quickly ran to get materials. We went into the material room and looked for servos, hinges, and any sensor that could sense pressure or touch.



We chose a servo because our group had experience with them before, instead of a nice metal stepper motor (this choice would later cause us trouble).

We also found these interesting copper circles, which were pressure sensors that exactly fit our needs. Very lucky.

<div class="row justify-content-center">
  <div class="col-12 col-md-8 col-lg-6 mt-3">
        {% include figure.liquid loading="eager" path="assets/img/unfinishedBox.jpeg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The electronics of the box in the making.
</div>

I worked on making the box, which involved a lot of laser-cutting scrap wood in the Maker Center to achieve the perfect box size. The box needed to be large enough to fit electronics but small enough for the servo to easily lift the lid. Looking around the Maker Center, I found the perfect water-based paint to stain the wood:


<div class="row justify-content-center">
  <div class="col-12 col-md-8 col-lg-6 mt-3">
        {% include figure.liquid loading="eager" path="assets/img/stainedWood.jpeg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

We worked well into the night until they kicked me out of the Maker Center, and we had to go home.

We returned early the next morning to continue working. I finished the box and started gluing the bottom structure to the wooden base. Since the wood was so thin, the wood glue I was using struggled to hold effectively due to insufficient drying time—lesson learned: use hot glue!

With about one hour left before the competition, the box was nearly complete, and the electronics were working. We started assembling, but the box began falling apart due to the failed wood glue, and the servo motor was jittery and rough in its movement. We quickly reassembled it with just 30 minutes left until presentations. Panicking slightly, we finally decided to use hot glue to hold it together. By the time we finished assembling, we had to rush downstairs for the presentation.

At our table, with our box completed, we ran the Arduino code, and it worked perfectly on the first run! Unfortunately, on the second attempt, the cheap servo began slipping and failing, likely because we had manipulated it too much, damaging the internal plastic gears.

Here is a video of it working:

<div class="row justify-content-center">
  <div class="col-12 col-md-8 col-lg-6 mt-3">
        {% include video.liquid path="assets/video/lockMovie.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>


I'm very proud of what we built.
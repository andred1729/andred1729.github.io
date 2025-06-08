---
layout: page
title: power-on-touch
description: power-on-touch turns your hand into a wireless power source
img: assets/img/case.png
importance: 4
category: past
related_publications: true

---

Our project, Power-on-Touch, explores an idea to eliminate batteries in everyday objects by powering them solely through user interaction. Developed as part of our research at the University of Chicago's Human-Computer Integration Lab, this technology harnesses resonant inductive coupling to wirelessly transfer energy from a wearable transmitter to devices as the user interacts with them.

Our applications were several, including a self-opening box, restaurant call button, lockers, a microphone, a lock-box, and a scale.

Here is the demonstration of the lock-box / doorknob. It was actually pretty interesting to make—we first realized that servo motors were hideously inefficient for our purposes (we were transmitting around 1–2 watts), as you can see:

<div class="row justify-content-center">
  <div class="col-12 col-md-8 col-lg-6 mt-3">
        {% include video.liquid path="assets/video/lockboxServo.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>
<div class="caption">
    Servo struggling to open box lid
</div>

We found that tiny DC motors had similar torque to the servos and were far more efficient, so we used those instead.

These applications were fascinating to build, and they go to show that a little power goes a long way—we were able to power a restaurant service button, a microphone, and even a scale!

You can see more in the paper video:

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <div class="ratio ratio-16x9">
            <iframe src="https://www.youtube.com/embed/7ZPMr30xVdE" title="Power-on-Touch Demo Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
</div>

All work was done with UChicago's <a href="https://lab.plopes.org/">HCI</a> lab, led by Pedro Lopes.

{% cite power-on-touch %}

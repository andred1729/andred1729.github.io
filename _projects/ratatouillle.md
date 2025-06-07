---
layout: page
title: ratatouille
description: solving micromouse with RL
img: assets/img/ratattouilleimage.png
importance: 2
category: current
pdf: assets/pdf/ratatouille.pdf
---
    --- In Progress!
    
{% if page.pdf %}
<div class="mt-3 text-right">
    <a href="{{ page.pdf | relative_url }}" target="_blank" rel="noopener noreferrer" style="font-size: 1.2rem;">
        <i class="fa-solid fa-file-pdf" style="font-size: 1.4rem;"></i> ratatouille paper
    </a>
</div>
{% endif %}

Our project for our class: Planning, Learning, and Estimation for Robotics and Artificial Intelligence TTIC 31170 taught by Matthew Walter, involved solving micromouse using two different RL agents: a Soft Actor Critic and a Deep Q-Network.

Micromouse is a competion where teams build small, autonomous robots that are designed to reach the center of the maze.



<div class="row justify-content-sm-center">
    <div class="col-sm-9 col-md-8 col-lg-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/micromousewiki.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
   Real Life Micromouse
</div>

We developed a Micromouse simulator from scratch, handcrafting the mazes in order to train our agents, with each set of mazes including the previous set within the others.


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/4-2.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/6-2.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/8-2.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/12-2.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
     Range of Maze Sizes Pictured in Order: 4x4-2, 6x6-2, 8x8-2, 12x12-2.
</div>



 It was very succesful in the smaller mazes with more questionable performance as we got to larger mazes. We found that we could train from scratch the the agent to solve the smaller mazes (4x4 and 6x6).

<div class="row justify-content-sm-center">
    <div class="col-sm-9 col-md-8 col-lg-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/4x4.gif" title="4x4 maze agent solving gif" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Agent Training on 4x4-1 Maze.
</div>

As you can see, we found that the agent converged around 150K steps for the 4x4 and a little after that for the 6x6 when training from scratch:


<div class="row justify-content-sm-center">
    <div class="col-12 col-lg-10 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/smallmazescompletion.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

For the larger maze, the agent failed at learning the maze from scratch, needing to be initialized on previous weights in order to complete the maze.


Our findings are in the paper attached!

I'm currently working on finalizing the DQN


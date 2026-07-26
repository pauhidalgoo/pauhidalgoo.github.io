---
title: "Fewer Edges, Faster Protein Graph Learning"
slug: "fewer-edges"
date: 2026-04-01
description: "Topology, geometric inductive biases, and memory-efficient protein graph neural networks."
summary: "A first-author GRaM @ ICLR 2026 blogpost on sparse protein graphs and efficient geometric message passing."
type_label: "Accepted · GRaM @ ICLR 2026"
role: "First author"
external_url: "https://gram-blogposts.github.io/2026/blog/2026/fewer-edges/"
tags: ["Geometric ML", "Biology", "Graphs"]
draft: false
---

Protein graph neural networks often treat graph construction as a fixed pre-processing detail. This work questions it, and asks which edges does a protein model actually need.

The study investigates topology, geometric inductive biases, and Pareto trade-offs across EC, GO, and Fold3D benchmarks. It introduces Angle Rewiring and a FiLM-style Efficient IEConv variant designed to retain useful structural information while reducing memory and computation.

This work was completed during my internship at Nostrum Biodiscovery.

[Read the accepted GRaM blogpost ↗](https://gram-blogposts.github.io/2026/blog/2026/fewer-edges/)

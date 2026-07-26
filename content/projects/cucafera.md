---
title: "Cucafera"
date: 2024-09-20
description: "A small Catalan language model built and trained from scratch."
summary: "244M parameters, 5.5B training tokens, one A100 and a transparent record of how it was made."
type_label: "Language model · Personal project"
project_no: "P-01"
links:
  - label: "Repository"
    url: "https://github.com/pauhidalgoo/cucafera"
  - label: "Model"
    url: "https://huggingface.co/pauhidalgoo/cucafera"
tags: ["Language models", "Research practice"]
---

Cucafera began as a practical question: **what do you learn when you build a language model all the way down?**

The result is a 244M-parameter, LLaMA-inspired model for Catalan. I (together with a classmate) curated the training data, implemented the architecture in PyTorch and Hugging Face, trained a BPE tokenizer, ran pretraining, and released the model and datasets publicly.

## At a glance

- 244 million parameters
- 30 transformer layers
- 65,536-token vocabulary
- 2,048-token context
- Grouped-query attention with 8 query heads and 4 key/value heads
- 5.5 billion Catalan training tokens over 11,007 steps

Pretraining took roughly 1.5 days on a single A100 80GB GPU. The project intentionally documents cost, training choices, evaluation, and failure modes.

## Why small and local?

A small model makes the whole pipeline inspectable. Catalan makes the data question unavoidable: quality, coverage, and provenance matter when the apparent abundance of web text disappears.

Cucafera is not a frontier model. It can produce fluent Catalan, but it can hallucinate, miss instructions, and lacks preference alignment. Those limitations are part of the project’s value: they turn an abstract understanding of language-model training into a concrete one.

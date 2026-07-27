---
title: "Training Cucafera: A Catalan Language Model from Scratch"
slug: "training-cucafera"
date: 2024-09-20
lastmod: 2026-07-26
description: "What I learned by controlling the data, tokenizer, model code, training run, and release."
summary: "A project story about training a 244M-parameter model on approximately 5.5B Catalan tokens with a single A100."
type_label: "PROJECT STORY · LANGUAGE MODELLING"
author: "Pau Hidalgo Pujol"
tags:
  - "Language models"
  - "Research practice"
math: true
toc: true
links:
  - label: "Code"
    url: "https://github.com/pauhidalgoo/cucafera"
  - label: "Model"
    url: "https://huggingface.co/pauhidalgoo/cucafera"
  - label: "Datasets"
    url: "https://huggingface.co/collections/pauhidalgoo/patufet-66c9d8a35de670d21cb32f54"
---

Catalan has millions of speakers, a long literary tradition, and a visible digital presence. It still occupies a marginal position in most general-purpose language models. Cucafera began as an attempt to understand LLMs and that gap, controlling the complete pipeline: data, tokenisation, architecture, training, evaluation, and release.

{{< facts >}}
MODEL | 244M parameters
DATA | Approximately 5.5B tokens
LANGUAGE | Catalan
COMPUTE | 1 × A100 80 GB
STATUS | Public personal project
{{< /facts >}}

## Why Catalan?

Working with Catalan makes data decisions important and more interesting. Not many resources exist in that language, compared to the available datasets in english. Filtering, coverage, provenance, and synthetic examples are very important in this limited corpus.

Adapting a capable multilingual model would almost certainly produce a stronger assistant for less compute. But the point was to make the entire training process inspectable and to learn from decisions that are normally inherited.

## Why train from scratch?

Training from scratch gives control over the tokenizer, model implementation, and every token seen during pretraining. It also exposed the cost of that control: data work dominated the project, debugging consumed expensive accelerator time, and the final model remained undertrained.

{{< callout type="note" title="Scope" >}}
Cucafera is an educational and research artefact, not a frontier model. Its value lies in the public pipeline and the lessons from building it, not in performance.
{{< /callout >}}

## Building the data pipeline

The training data came from [Patufet](/projects/patufet/), a collection assembled alongside the model. The pretraining run used educationally filtered Catalan text derived from CulturaX sources. Separate datasets supported instruction tuning and conversation.

For a lower-resource language, data work is important and determines what the model can know, which registers it can reproduce, and which errors will recur.


## Training a tokenizer

Cucafera uses a BPE tokenizer with a vocabulary of 65,536 tokens. Training a Catalan-specific tokenizer avoids treating the language entirely through segmentation choices inherited from a multilingual corpus.

## Choosing the architecture

The model is inspired by LLaMA 3: 30 transformer layers, a 768-dimensional embedding, rotary position embeddings, GeGLU activations, and grouped-query attention with eight query heads and four key/value heads. Its context length is 2,048 tokens.

The objective remains next-token prediction:

$$
\mathcal{L}(\theta) = - \sum_t \log p_\theta(x_t \mid x_{<t})
$$

The architectural choices were deliberately conventional. The research value of the project was in understanding the system around the transformer, inspired by Karpathy's [Let's Reproduce GPT-2](https://www.youtube.com/watch?v=l8pRSuU81PU).

## Compute constraints

The final pretraining run covered 11,007 steps at roughly half a million tokens per step—approximately 5.5 billion tokens. It took about 1.5 days on one A100 80GB GPU and cost $28.80 on Vast.ai.

## Training failures and fixes

An earlier model version suffered from exploding gradients. That experience pushed the final run toward a conservative learning rate. The loss was still improving when the compute budget ended, so the released base model should be considered undertrained.

{{< callout type="experiment" title="What the failed run changed" >}}
IDK THIS IS JUST TO TEST THE CALLOUT
{{< /callout >}}

## Evaluation and failure cases

The model was evaluated with the EleutherAI LM Evaluation Harness on Catalan tasks. The scores are useful for comparing checkpoints and identifying obvious weaknesses.

Qualitatively, Cucafera can produce plausible Catalan, but it also generates incorrect facts and the instruction-tuned versions sometimes fail to follow requests. The project has no RLHF or DPO stage. Safety and factual reliability should therefore be treated as unresolved.

{{< callout type="limitation" >}}
The released model should not be used as an authoritative source. Fluent Catalan output does not imply factual accuracy, robust instruction following, or broad cultural coverage.
{{< /callout >}}

## What I would change

I would invest more effort in new data, deduplication and contamination analysis before scaling the run. I would also evaluate tokenisation across domains, reserve a cleaner suite of held-out Catalan data, increase training duration, and compare from-scratch training against continued pretraining of a multilingual base model.

I would also like to try more modern architectures, like Mixture-of-Experts. Finally, including the RL stage would be interesting to see.

## Resources and reproducibility

The repository contains the model implementation, tokenizer, training material, evaluation code, and logs. Models and datasets are published separately on Hugging Face.

{{< article-links code="https://github.com/pauhidalgoo/cucafera" model="https://huggingface.co/pauhidalgoo/cucafera" dataset="https://huggingface.co/collections/pauhidalgoo/patufet-66c9d8a35de670d21cb32f54" >}}

## References

- The [Cucafera repository](https://github.com/pauhidalgoo/cucafera) documents the released configuration, training run, evaluation, and known limitations.
- The [Patufet collection](https://huggingface.co/collections/pauhidalgoo/patufet-66c9d8a35de670d21cb32f54) contains the public Catalan datasets developed around the project.

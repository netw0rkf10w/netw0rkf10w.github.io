+++
abstract = "The problem of discrete Markov Random Field (MRF) optimization, or MAP inference, can be reformulated as an integer linear program (ILP), which is NP-Hard in general. A usual method to approximately solve this ILP is to relax the integral constraints. Many MAP inference methods have been based on this linear programming relaxation. In this work, we propose a new decomposition scheme to solve the dual of this relaxed linear program, where the dependencies between any two nodes of the graph are relaxed using Lagrangian relaxation. Since the dual function is non-differentiable, subgradient methods are first used. The application on a stereo vision problem shows that the convergence rate of these methods, which is $O(1/\\epsilon^2)$ in theory, is not practical. Therefore, we smooth the dual using Nesterov’s method and then use optimal first-order gradient methods to optimize the obtained smooth function, which result in a better convergence rate of $O(1/\\epsilon)$. The method can handle any graph structures with arbitrary potential functions. As an application, a new MRF model for locally affine image registration is proposed."
abstract_short = ""
authors = ["D. Khuê Lê-Huu"]
date = "2014-09-01"
image_preview = ""
math = true
publication_types = ["4"]
publication = "CentraleSupélec research report"
publication_short = ""
selected = false
title = "Dual Decomposition with Accelerated First-Order Scheme for Discrete Markov Random Field Optimization"
url_code = "https://github.com/netw0rkf10w/smoothMRFs"
url_dataset = ""
url_pdf = "papers/MVAThesis.pdf"
# url_project = "project/deep-learning/"
url_slides = ""
url_video = ""

+++

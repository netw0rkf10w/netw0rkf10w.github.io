/* -*- Mode: Javascript; indent-tabs-mode:nil; js-indent-level: 2 -*- */
/* vim: set ts=2 et sw=2 tw=80: */

/*************************************************************
 *
 *  MathJax/config/local/local.js
 *  
 *  Include changes and configuration local to your installation
 *  in this file.  For example, common macros can be defined here
 *  (see below).  To use this file, add "local/local.js" to the
 *  config array in MathJax.js or your MathJax.Hub.Config() call.
 *
 *  ---------------------------------------------------------------------
 *  
 *  Copyright (c) 2009-2015 The MathJax Consortium
 * 
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

MathJax.Hub.Config({
    tex2jax: {
      inlineMath: [ ['$','$'], ['\\\(','\\\)'] ],
      /*inlineMath: [],
      displayMath: [],*/
      processEscapes: true
    },
    CommonHTML: { linebreaks: { automatic: true } },
    "HTML-CSS": { linebreaks: { automatic: true } },
         SVG: { linebreaks: { automatic: true } },
         TeX: { equationNumbers: { autoNumber: "AMS" }}
    
  });
  
MathJax.Hub.Config({
  TeX: {
    Macros: {
  a: "\\mathbf{a}",
	b: "\\mathbf{b}",
	c: "\\mathbf{c}",
	d: "\\mathbf{d}",
	e: "\\mathbf{e}",
	f: "\\mathbf{f}",
	g: "\\mathbf{g}",
  h: "\\mathbf{h}",
	i: "\\mathbf{i}",
  j: "\\mathbf{j}",
	k: "\\mathbf{k}",
  l: "\\mathbf{l}",
	m: "\\mathbf{m}",
  l: "\\mathbf{n}",
	o: "\\mathbf{o}",
  p: "\\mathbf{p}",
	q: "\\mathbf{q}",
  r: "\\mathbf{r}",
	s: "\\mathbf{s}",
  t: "\\mathbf{t}",
	u: "\\mathbf{u}",
  v: "\\mathbf{v}",
	w: "\\mathbf{w}",
  x: "\\mathbf{x}",
	y: "\\mathbf{y}",
  z: "\\mathbf{z}",
	A: "\\mathbf{A}",
	B: "\\mathbf{B}",
	C: "\\mathbf{C}",
	D: "\\mathbf{D}",
	E: "\\mathbf{E}",
	F: "\\mathbf{F}",
	G: "\\mathbf{G}",
	H: "\\mathbf{H}",
	I: "\\mathbf{I}",
	J: "\\mathbf{J}",
	K: "\\mathbf{K}",
	L: "\\mathbf{L}",
	M: "\\mathbf{M}",
	N: "\\mathbf{N}",
	O: "\\mathbf{O}",
	P: "\\mathbf{P}",
	Q: "\\mathbf{Q}",
	R: "\\mathbf{R}",
	S: "\\mathbf{S}",
	T: "\\mathbf{T}",
	U: "\\mathbf{U}",
	V: "\\mathbf{V}",
	W: "\\mathbf{W}",
	X: "\\mathbf{X}",
	Y: "\\mathbf{Y}",
	Z: "\\mathbf{Z}",
	cA: "\\mathcal{A}",
	cB: "\\mathcal{B}",
	cC: "\\mathcal{C}",
	cD: "\\mathcal{D}",
	cE: "\\mathcal{E}",
	cF: "\\mathcal{F}",
	cG: "\\mathcal{G}",
	cH: "\\mathcal{H}",
	cI: "\\mathcal{I}",
	cJ: "\\mathcal{J}",
	cK: "\\mathcal{K}",
	cL: "\\mathcal{L}",
	cM: "\\mathcal{M}",
	cN: "\\mathcal{N}",
	cO: "\\mathcal{O}",
	cP: "\\mathcal{P}",
	cQ: "\\mathcal{Q}",
	cR: "\\mathcal{R}",
	cS: "\\mathcal{S}",
	cT: "\\mathcal{T}",
	cU: "\\mathcal{U}",
	cV: "\\mathcal{V}",
	cW: "\\mathcal{W}",
	cX: "\\mathcal{X}",
	cY: "\\mathcal{Y}",
	cZ: "\\mathcal{Z}",
	NN: "\\mathbb{N}",
	ZZ: "\\mathbb{Z}",
	QQ: "\\mathbb{Q}",
	RR: "\\mathbb{R}",
	set: ["\\left\\{#1\\right\\}",1],
	norm: ["\\left\\|#1\\right\\|",1],
    }
  }
});


MathJax.Ajax.loadComplete("MathJax/config/local/local.js");

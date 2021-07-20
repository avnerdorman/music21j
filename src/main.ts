/**!
 * **music21j**: Javascript reimplementation of Core music21 features.
 *
 * See http://web.mit.edu/music21/ for more details.
 *
 * Copyright (c) 2013-20, Michael Scott Cuthbert and cuthbertLab
 * Released under a BSD-3-clause license
 *
 */
/**
 *
 * Based on music21, Copyright (c) 2006-20, Michael Scott Cuthbert and cuthbertLab
 * The plan is to implement all core music21 features as Javascript and to expose
 * more sophisticated features via server-side connections to remote servers running the
 * python music21 (music21p).
 *
 * Requires an ECMAScript 5 compatible browser w/ SVG and Canvas. IE 11 or any recent
 * version of Firefox, Safari, Edge,  Chrome, etc. will do.
 *
 * All interfaces are alpha and may change radically from day to day and release to release.
 * Do not use this in production code yet.
 *
 * music21j acknowledges VexFlow, MIDI.js in particular for their great efforts without which
 * this module would not be possible.
 *
 * @namespace music21
 * @exports music21
 */

// webpack loader for music21j.
import 'regenerator-runtime/runtime';
import * as MIDI from 'midicube';  // to be removed when export * from is okay.
import * as $ from 'jquery';
import * as Vex from 'vexflow';
import 'jquery-ui-bundle';

// TODO: add attrchange

// order below doesn't matter, but good to give a sense
// of what will be needed by almost everyone, and then
// alphabetical.

import * as exceptions21 from './exceptions21';
import * as prebase from './prebase';
import * as base from './base';
import * as common from './common';

import * as articulations from './articulations';
import * as audioRecording from './audioRecording';
import * as audioSearch from './audioSearch';
import * as bar from './bar';
import * as beam from './beam';
import * as chord from './chord';
import * as chordTables from './chordTables';
import * as clef from './clef';
import * as converter from './converter';
import * as derivation from './derivation';
import * as duration from './duration';
import * as dynamics from './dynamics';
import * as editorial from './editorial';
import * as expressions from './expressions';
import * as figuredBass from './figuredBass';
import * as fromPython from './fromPython';
import * as harmony from './harmony';
import * as instrument from './instrument';
import * as interval from './interval';
import * as key from './key';
import * as keyboard from './keyboard';
import * as layout from './layout';
import * as meter from './meter';
import * as miditools from './miditools';
import * as musicxml from './musicxml';
import * as note from './note';
import * as parseLoader from './parseLoader';
import * as pitch from './pitch';
import * as renderOptions from './renderOptions';
import * as roman from './roman';
import * as scale from './scale';
import * as sites from './sites';
import * as stream from './stream';
import * as svgs from './svgs';
import * as tempo from './tempo';
import * as tie from './tie';
import * as tinyNotation from './tinyNotation';
import * as vfShow from './vfShow';
import * as voiceLeading from './voiceLeading';
import * as webmidi from './webmidi';

import { debug } from './debug';


export {
    MIDI,
    Vex,

    exceptions21,
    base,
    prebase,
    common,

    debug,

    articulations,
    audioRecording,
    audioSearch,
    bar,
    beam,
    chord,
    chordTables,
    clef,
    converter,
    derivation,
    duration,
    dynamics,
    editorial,
    expressions,
    figuredBass,
    fromPython,
    harmony,
    instrument,
    interval,
    key,
    keyboard,
    layout,
    meter,
    miditools,
    musicxml,
    note,
    parseLoader,
    pitch,
    renderOptions,
    roman,
    scale,
    sites,
    stream,
    svgs,
    tempo,
    tie,
    tinyNotation,
    vfShow,
    voiceLeading,
    webmidi,
};

export const VERSION = '0.11.10';

if (typeof window !== 'undefined') {
    (window as any).$ = $;
    (window as any).jQuery = $;
}

parseLoader.runConfiguration();

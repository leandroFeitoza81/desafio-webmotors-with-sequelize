const { it, expect, beforeEach, describe } = require('@jest/globals');
const request = require('supertest');
const app = require('../src/app');
const truncate = require('./utils/truncate');
const { tb_AnuncioWebmotors } = require('../src/models');

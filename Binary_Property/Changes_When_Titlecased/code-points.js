module.exports=JSON.parse(require('zlib').gunzipSync(Buffer.from([31,139,8,0,0,0,0,0,0,19,45,152,65,150,196,56,8,67,47,212,139,194,128,13,103,153,55,247,191,198,232,43,179,8,175,218,66,9,34,46,139,234,127,246,253,237,252,237,254,197,239,167,43,116,29,93,169,171,116,181,174,171,235,233,26,93,202,11,229,133,242,66,121,161,188,80,94,40,47,148,23,202,11,229,133,242,142,242,142,242,142,242,38,254,206,73,93,165,171,117,93,93,79,215,232,218,191,147,63,93,202,201,163,75,121,169,188,84,94,42,47,149,151,202,75,229,149,242,74,121,165,188,82,94,41,175,148,87,202,43,229,148,114,90,57,173,156,86,78,43,167,149,211,202,105,221,167,133,95,97,87,235,87,107,87,107,87,107,79,107,79,107,79,107,79,107,79,107,212,60,90,27,173,141,214,70,107,171,181,213,218,106,77,157,59,234,91,170,103,169,126,165,122,149,234,83,170,71,169,254,164,250,146,234,73,170,31,169,94,164,250,144,210,159,210,158,135,53,229,73,115,74,111,74,107,74,103,74,99,74,95,74,91,74,87,150,214,164,41,165,39,165,37,165,35,165,35,165,35,165,35,165,35,165,35,165,35,165,35,165,35,165,35,165,35,159,158,49,122,238,232,185,210,145,163,103,75,71,74,71,174,214,246,254,149,222,117,169,238,82,205,165,247,90,170,185,244,14,75,239,175,244,238,74,245,150,234,44,189,151,210,187,40,189,135,82,125,165,218,74,181,149,122,92,234,111,169,174,106,254,22,126,117,159,171,245,171,245,43,206,213,218,211,218,211,218,211,218,211,154,122,92,234,113,169,199,165,218,74,61,46,213,86,170,173,212,227,82,143,75,61,46,106,84,159,75,125,110,245,185,85,107,171,199,173,122,91,61,110,237,191,214,222,107,213,220,170,185,85,115,107,159,181,246,88,107,127,181,106,111,245,184,213,227,86,143,91,61,110,245,184,165,161,213,227,150,134,86,127,91,253,109,245,183,165,163,165,163,213,223,86,127,91,253,109,213,221,234,103,171,238,86,79,91,245,182,234,109,213,219,170,183,85,111,171,159,173,154,123,75,151,48,213,221,250,90,181,234,190,170,251,106,127,92,125,127,174,106,190,170,249,170,207,87,123,227,170,238,171,186,175,106,190,170,249,106,111,92,213,124,85,231,213,94,191,170,241,106,95,95,213,120,181,175,175,234,188,234,249,85,159,71,57,163,254,141,234,25,213,50,170,99,84,199,168,142,213,119,115,197,95,233,220,226,179,214,244,93,89,189,183,213,119,101,165,123,117,223,213,125,87,247,93,221,119,117,223,85,15,86,239,115,213,135,109,229,169,23,171,103,173,250,177,122,175,171,158,172,222,237,170,47,171,247,187,218,123,171,119,188,218,127,171,247,188,218,131,171,119,189,218,135,171,190,173,246,226,234,157,175,122,183,143,147,70,235,218,143,171,154,87,61,220,97,77,28,213,190,212,173,222,45,39,210,119,30,113,24,249,36,242,49,228,51,200,135,16,167,208,47,124,92,129,114,240,252,56,113,126,143,163,235,177,246,56,188,30,180,231,227,11,238,131,251,200,27,184,195,237,7,198,192,24,24,3,99,96,140,79,60,24,3,99,97,44,140,133,177,48,22,198,194,88,24,11,99,125,72,250,148,228,152,68,130,15,84,159,168,62,82,125,166,250,80,245,169,234,99,245,59,87,191,131,21,134,143,86,159,173,62,92,125,186,250,120,245,249,234,3,22,189,62,94,227,144,119,72,57,160,7,32,1,18,32,1,18,32,1,10,160,124,106,3,20,64,1,52,64,3,92,7,31,232,160,23,244,129,210,216,160,167,65,59,131,78,114,176,43,0,208,186,24,159,255,0,244,42,104,83,208,161,160,57,177,118,5,44,129,110,28,26,113,232,193,65,254,65,249,65,244,65,239,65,229,177,135,96,32,56,71,96,27,129,103,4,134,17,56,70,96,23,129,87,4,70,17,184,68,96,17,129,63,4,230,160,0,128,74,124,33,48,133,192,17,2,75,8,60,33,48,133,192,21,2,91,8,124,33,48,134,192,25,2,107,8,188,33,48,135,192,29,2,123,8,252,33,48,136,192,33,2,139,8,60,34,48,137,192,37,2,155,8,124,34,48,138,192,41,2,171,8,188,34,48,139,192,45,20,0,80,158,188,228,228,253,38,79,227,28,87,224,79,182,109,242,92,206,244,224,80,15,78,117,5,104,108,91,14,120,5,24,212,146,108,219,164,32,78,124,5,24,108,219,164,52,28,64,1,6,219,54,41,178,216,182,69,165,120,131,66,18,138,208,132,75,120,132,33,192,96,219,22,18,138,109,91,232,192,71,20,250,239,117,57,236,223,187,42,92,33,9,77,120,4,128,5,88,128,5,88,0,213,242,158,202,80,72,66,19,30,1,32,0,2,128,103,188,0,8,128,3,112,0,14,192,1,56,0,9,144,0,9,144,0,9,80,0,5,64,165,175,0,40,247,53,64,3,52,64,3,52,192,5,184,0,23,224,2,92,128,7,240,0,30,192,3,120,0,40,127,40,127,40,127,40,127,40,127,40,127,40,127,40,127,40,127,40,31,148,15,202,7,229,131,242,65,249,160,124,80,62,40,31,148,15,202,7,229,131,242,65,249,160,124,80,62,250,166,40,128,202,196,21,72,209,120,165,64,30,242,7,249,83,254,19,26,242,7,249,131,252,65,254,32,127,144,63,200,31,228,15,242,7,249,131,252,65,254,32,127,144,63,200,31,228,99,82,15,151,82,0,64,254,32,31,199,122,216,149,2,0,242,7,249,139,252,69,254,34,127,145,191,200,95,228,47,242,23,249,139,252,69,254,34,127,145,191,200,95,228,47,242,23,229,139,232,69,239,106,136,81,0,213,40,163,64,138,140,242,225,148,15,171,124,120,229,195,12,31,110,248,176,195,135,31,62,12,241,225,136,15,171,123,120,221,195,236,30,110,247,176,187,135,223,61,12,79,1,198,240,105,252,9,46,202,119,224,34,127,23,46,174,253,211,151,110,176,59,133,67,72,66,17,90,65,39,191,194,35,12,97,21,14,140,3,227,192,56,48,146,79,233,79,112,19,110,194,101,82,248,37,220,132,91,124,42,62,53,119,105,238,210,112,27,110,195,109,184,13,183,225,50,110,252,26,198,133,113,97,92,242,46,121,151,188,75,222,37,239,146,247,200,123,228,13,159,198,159,120,6,211,10,94,59,120,237,224,181,131,215,14,30,58,120,232,224,161,131,135,14,30,58,120,232,224,161,131,135,14,222,56,120,227,224,141,131,55,14,222,56,216,226,96,139,163,147,91,33,225,38,92,250,18,180,4,51,156,40,62,149,63,145,167,45,175,239,18,201,52,34,16,24,215,159,160,93,30,132,84,28,81,1,6,82,227,241,180,199,211,16,24,104,195,7,167,121,120,115,23,6,72,133,67,0,224,46,205,93,250,58,229,17,134,160,187,52,13,107,26,198,188,169,0,227,193,120,48,134,89,238,48,192,29,38,184,195,8,119,152,225,14,67,156,54,186,118,45,41,201,188,151,30,248,152,248,18,70,194,72,24,9,35,97,36,12,15,136,158,16,61,34,126,51,34,12,79,137,30,19,61,39,122,80,172,111,172,240,111,62,79,38,233,209,196,142,21,233,225,196,198,21,233,241,196,254,21,252,238,33,122,26,57,230,122,90,225,119,16,209,220,99,174,103,23,126,23,17,205,77,115,255,159,100,204,253,6,154,52,247,155,107,210,220,111,188,73,115,61,229,100,153,235,97,39,203,92,207,60,89,230,122,244,201,50,215,19,80,150,185,159,198,54,215,243,80,182,185,253,13,82,230,182,185,109,110,155,219,230,94,231,123,108,202,107,244,122,253,249,110,207,247,241,196,100,239,254,172,248,179,225,207,130,63,251,253,172,247,179,221,207,114,63,187,253,172,246,179,217,207,98,109,175,68,163,238,118,185,207,229,14,151,123,91,238,106,185,159,149,223,232,103,212,221,43,247,173,190,185,240,27,12,191,201,240,27,13,191,217,208,61,41,119,163,250,155,27,141,90,123,181,81,107,47,207,141,229,14,148,39,199,242,232,88,158,29,203,195,99,189,111,232,52,234,110,148,7,200,242,4,89,30,33,203,51,100,121,136,44,79,145,237,81,186,61,70,183,187,209,222,87,109,189,237,125,213,86,221,222,87,109,237,237,125,213,231,203,31,71,15,186,222,87,157,223,188,107,174,123,210,222,87,237,206,180,247,85,187,63,237,125,213,238,82,123,95,181,123,213,222,87,237,142,181,247,85,187,111,237,125,213,238,94,123,95,245,55,96,123,95,245,55,103,123,95,181,251,217,222,87,237,174,182,247,85,187,183,237,222,114,96,232,93,222,112,76,199,111,229,57,242,59,157,99,131,104,244,25,125,70,159,209,49,58,70,199,232,24,29,163,107,116,141,174,209,53,186,160,252,118,37,166,35,40,191,82,137,207,209,57,233,156,116,78,26,77,163,105,180,140,150,209,50,202,255,13,206,155,47,146,243,92,195,115,13,207,53,60,215,240,92,195,248,233,227,167,51,8,17,189,30,225,104,52,140,134,81,255,239,98,252,223,11,6,34,162,81,215,60,174,121,92,243,184,230,113,205,227,154,199,53,143,107,30,215,60,174,121,92,51,131,145,98,27,109,163,109,180,141,182,81,191,169,241,155,26,254,219,161,120,29,141,250,93,140,223,197,248,93,140,251,192,239,118,226,247,153,204,181,174,181,174,181,174,181,46,6,157,203,139,119,124,142,227,184,196,251,115,116,142,156,71,81,251,129,232,252,231,252,231,252,199,127,20,56,9,137,215,241,57,142,163,81,255,199,33,253,63,135,244,127,29,56,9,137,229,104,110,155,219,230,182,185,109,238,53,247,154,123,205,189,230,94,115,175,185,215,220,107,238,53,247,154,171,51,243,222,251,251,98,56,30,199,116,44,199,118,188,142,207,113,28,151,24,230,134,185,97,110,152,27,230,134,185,97,110,152,27,230,134,185,199,220,99,238,49,247,152,123,204,61,230,30,115,143,185,199,220,99,110,154,155,230,166,185,105,110,154,155,230,166,185,105,110,154,155,251,239,127,51,175,33,70,136,21,0,0])))
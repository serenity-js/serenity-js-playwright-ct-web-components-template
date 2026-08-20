window.__SERENITY_REPORT_DATA__ = {
  "schemaVersion": 1,
  "summary": {
    "title": "Playwright",
    "totalScenarios": 18,
    "outcomes": {
      "passed": 18,
      "failed": 0,
      "pending": 0,
      "skipped": 0,
      "compromised": 0,
      "error": 0
    },
    "duration": 26248,
    "startedAt": "2026-08-20T11:10:24.429Z",
    "finishedAt": "2026-08-20T11:10:50.677Z",
    "testRunner": "Playwright"
  },
  "scenarios": [
    {
      "name": "shows the placeholder when no option is selected yet",
      "category": "Dropdown",
      "outcome": "SUCCESS",
      "duration": 410,
      "startedAt": "2026-08-20T11:10:24.429Z",
      "source": {
        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
        "line": 25
      },
      "tags": [
        {
          "type": "theme",
          "name": "Components"
        },
        {
          "type": "capability",
          "name": "Dropdown"
        },
        {
          "type": "feature",
          "name": "Dropdown"
        },
        {
          "type": "project",
          "name": "chromium"
        },
        {
          "type": "platform",
          "name": "Linux 6.17.0-1022-azure"
        },
        {
          "type": "browser",
          "name": "chromium 151.0.7922.34"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-ct-web-components-template"
        }
      ],
      "activities": [
        {
          "name": "Tess ensures that placeholder of dropdown does eventually equal \"Select option\"",
          "outcome": "SUCCESS",
          "duration": 56,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T11:10:24.935Z",
          "location": {
            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
            "line": 36,
            "column": 20
          },
          "artifacts": [
            {
              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-placeholder-of-dr-53fc04e9a2.png",
              "type": "screenshot"
            }
          ]
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "1140",
          "timestamp": "2026-08-18T23:07:06.992Z",
          "duration": 396,
          "activities": [
            {
              "name": "Tess ensures that placeholder of dropdown does eventually equal \"Select option\"",
              "outcome": "SUCCESS",
              "duration": 48,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-18T23:07:07.502Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 36,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-placeholder-of-dr-53fc04e9a2.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        },
        {
          "outcome": "SUCCESS",
          "run": "1144",
          "timestamp": "2026-08-20T11:08:32.384Z",
          "duration": 381,
          "activities": [
            {
              "name": "Tess ensures that placeholder of dropdown does eventually equal \"Select option\"",
              "outcome": "SUCCESS",
              "duration": 51,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T11:08:32.874Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 36,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-placeholder-of-dr-53fc04e9a2.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        },
        {
          "outcome": "SUCCESS",
          "run": "1146",
          "timestamp": "2026-08-20T11:10:24.429Z",
          "duration": 410,
          "activities": [
            {
              "name": "Tess ensures that placeholder of dropdown does eventually equal \"Select option\"",
              "outcome": "SUCCESS",
              "duration": 56,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T11:10:24.935Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 36,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-placeholder-of-dr-53fc04e9a2.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        }
      ],
      "cast": [
        {
          "name": "Tess",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://localhost:3100\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        }
      ]
    },
    {
      "name": "shows the placeholder when no option is selected yet",
      "category": "Dropdown",
      "outcome": "SUCCESS",
      "duration": 1351,
      "startedAt": "2026-08-20T11:10:30.842Z",
      "source": {
        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
        "line": 25
      },
      "tags": [
        {
          "type": "theme",
          "name": "Components"
        },
        {
          "type": "capability",
          "name": "Dropdown"
        },
        {
          "type": "feature",
          "name": "Dropdown"
        },
        {
          "type": "project",
          "name": "firefox"
        },
        {
          "type": "platform",
          "name": "Linux 6.17.0-1022-azure"
        },
        {
          "type": "browser",
          "name": "firefox 153.0"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-ct-web-components-template"
        }
      ],
      "activities": [
        {
          "name": "Tess ensures that placeholder of dropdown does eventually equal \"Select option\"",
          "outcome": "SUCCESS",
          "duration": 83,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T11:10:32.480Z",
          "location": {
            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
            "line": 36,
            "column": 20
          },
          "artifacts": [
            {
              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-placeholder-of-dropdown-do-b1a38d1d83.png",
              "type": "screenshot"
            }
          ]
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "1140",
          "timestamp": "2026-08-18T23:07:06.992Z",
          "duration": 1366,
          "activities": [
            {
              "name": "Tess ensures that placeholder of dropdown does eventually equal \"Select option\"",
              "outcome": "SUCCESS",
              "duration": 99,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-18T23:07:14.974Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 36,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-firefox-153-0-tess-ensures-that-placeholder-of-dropdown-do-b1a38d1d83.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        },
        {
          "outcome": "SUCCESS",
          "run": "1144",
          "timestamp": "2026-08-20T11:08:32.384Z",
          "duration": 1284,
          "activities": [
            {
              "name": "Tess ensures that placeholder of dropdown does eventually equal \"Select option\"",
              "outcome": "SUCCESS",
              "duration": 84,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T11:08:40.205Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 36,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-placeholder-of-dropdown-do-b1a38d1d83.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        },
        {
          "outcome": "SUCCESS",
          "run": "1146",
          "timestamp": "2026-08-20T11:10:24.429Z",
          "duration": 1351,
          "activities": [
            {
              "name": "Tess ensures that placeholder of dropdown does eventually equal \"Select option\"",
              "outcome": "SUCCESS",
              "duration": 83,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T11:10:32.480Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 36,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-placeholder-of-dropdown-do-b1a38d1d83.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        }
      ],
      "cast": [
        {
          "name": "Tess",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://localhost:3100\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        }
      ]
    },
    {
      "name": "shows the placeholder when no option is selected yet",
      "category": "Dropdown",
      "outcome": "SUCCESS",
      "duration": 741,
      "startedAt": "2026-08-20T11:10:39.029Z",
      "source": {
        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
        "line": 25
      },
      "tags": [
        {
          "type": "theme",
          "name": "Components"
        },
        {
          "type": "capability",
          "name": "Dropdown"
        },
        {
          "type": "feature",
          "name": "Dropdown"
        },
        {
          "type": "project",
          "name": "webkit"
        },
        {
          "type": "platform",
          "name": "Linux 6.17.0-1022-azure"
        },
        {
          "type": "browser",
          "name": "webkit 26.5"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-ct-web-components-template"
        }
      ],
      "activities": [
        {
          "name": "Tess ensures that placeholder of dropdown does eventually equal \"Select option\"",
          "outcome": "SUCCESS",
          "duration": 61,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T11:10:39.981Z",
          "location": {
            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
            "line": 36,
            "column": 20
          },
          "artifacts": [
            {
              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-placeholder-of-dropdown-does-59709b94f1.png",
              "type": "screenshot"
            }
          ]
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "1140",
          "timestamp": "2026-08-18T23:07:06.992Z",
          "duration": 752,
          "activities": [
            {
              "name": "Tess ensures that placeholder of dropdown does eventually equal \"Select option\"",
              "outcome": "SUCCESS",
              "duration": 65,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-18T23:07:22.364Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 36,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-webkit-26-5-tess-ensures-that-placeholder-of-dropdown-does-59709b94f1.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        },
        {
          "outcome": "SUCCESS",
          "run": "1144",
          "timestamp": "2026-08-20T11:08:32.384Z",
          "duration": 721,
          "activities": [
            {
              "name": "Tess ensures that placeholder of dropdown does eventually equal \"Select option\"",
              "outcome": "SUCCESS",
              "duration": 64,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T11:08:47.417Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 36,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-placeholder-of-dropdown-does-59709b94f1.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        },
        {
          "outcome": "SUCCESS",
          "run": "1146",
          "timestamp": "2026-08-20T11:10:24.429Z",
          "duration": 741,
          "activities": [
            {
              "name": "Tess ensures that placeholder of dropdown does eventually equal \"Select option\"",
              "outcome": "SUCCESS",
              "duration": 61,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T11:10:39.981Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 36,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-placeholder-of-dropdown-does-59709b94f1.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        }
      ],
      "cast": [
        {
          "name": "Tess",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://localhost:3100\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        }
      ]
    },
    {
      "name": "shows the available options when the menu is expanded",
      "category": "Dropdown",
      "outcome": "SUCCESS",
      "duration": 435,
      "startedAt": "2026-08-20T11:10:25.083Z",
      "source": {
        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
        "line": 43
      },
      "tags": [
        {
          "type": "theme",
          "name": "Components"
        },
        {
          "type": "capability",
          "name": "Dropdown"
        },
        {
          "type": "feature",
          "name": "Dropdown"
        },
        {
          "type": "project",
          "name": "chromium"
        },
        {
          "type": "platform",
          "name": "Linux 6.17.0-1022-azure"
        },
        {
          "type": "browser",
          "name": "chromium 151.0.7922.34"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-ct-web-components-template"
        }
      ],
      "activities": [
        {
          "name": "Tess opens the dropdown",
          "outcome": "SUCCESS",
          "duration": 230,
          "children": [
            {
              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
              "outcome": "SUCCESS",
              "duration": 219,
              "children": [
                {
                  "name": "Tess clicks on input field",
                  "outcome": "SUCCESS",
                  "duration": 67,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T11:10:25.244Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                    "line": 110,
                    "column": 27
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-input-field-5a32e9ada1.png",
                      "type": "screenshot"
                    }
                  ]
                },
                {
                  "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                  "outcome": "SUCCESS",
                  "duration": 34,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T11:10:25.353Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 51,
                    "column": 22
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-waits-until-page-element-locat-eab5296c26.png",
                      "type": "screenshot"
                    }
                  ]
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:10:25.209Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 51,
                "column": 22
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T11:10:25.208Z",
          "location": {
            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
            "line": 51,
            "column": 22
          }
        },
        {
          "name": "Tess ensures that available options of dropdown does eventually equal [ \"First\", \"Second\", \"Third\" ]",
          "outcome": "SUCCESS",
          "duration": 29,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T11:10:25.450Z",
          "location": {
            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
            "line": 53,
            "column": 20
          },
          "artifacts": [
            {
              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-available-options-4669f0a67a.png",
              "type": "screenshot"
            }
          ]
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "1140",
          "timestamp": "2026-08-18T23:07:06.992Z",
          "duration": 397,
          "activities": [
            {
              "name": "Tess opens the dropdown",
              "outcome": "SUCCESS",
              "duration": 205,
              "children": [
                {
                  "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                  "outcome": "SUCCESS",
                  "duration": 195,
                  "children": [
                    {
                      "name": "Tess clicks on input field",
                      "outcome": "SUCCESS",
                      "duration": 61,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-18T23:07:07.771Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 110,
                        "column": 27
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-input-field-5a32e9ada1.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                      "outcome": "SUCCESS",
                      "duration": 30,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-18T23:07:07.873Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                        "line": 51,
                        "column": 22
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-chromium-151-0-7922-34-tess-waits-until-page-element-locat-bfc16cca9d.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-18T23:07:07.738Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 51,
                    "column": 22
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-18T23:07:07.738Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 51,
                "column": 22
              }
            },
            {
              "name": "Tess ensures that available options of dropdown does eventually equal [ \"First\", \"Second\", \"Third\" ]",
              "outcome": "SUCCESS",
              "duration": 29,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-18T23:07:07.954Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 53,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-available-options-1500d68d25.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        },
        {
          "outcome": "SUCCESS",
          "run": "1144",
          "timestamp": "2026-08-20T11:08:32.384Z",
          "duration": 413,
          "activities": [
            {
              "name": "Tess opens the dropdown",
              "outcome": "SUCCESS",
              "duration": 224,
              "children": [
                {
                  "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                  "outcome": "SUCCESS",
                  "duration": 213,
                  "children": [
                    {
                      "name": "Tess clicks on input field",
                      "outcome": "SUCCESS",
                      "duration": 58,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:08:33.146Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 110,
                        "column": 27
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-input-field-5a32e9ada1.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                      "outcome": "SUCCESS",
                      "duration": 30,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:08:33.247Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                        "line": 51,
                        "column": 22
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-waits-until-page-element-locat-eab5296c26.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:08:33.114Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 51,
                    "column": 22
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:08:33.113Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 51,
                "column": 22
              }
            },
            {
              "name": "Tess ensures that available options of dropdown does eventually equal [ \"First\", \"Second\", \"Third\" ]",
              "outcome": "SUCCESS",
              "duration": 28,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T11:08:33.348Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 53,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-available-options-4669f0a67a.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        },
        {
          "outcome": "SUCCESS",
          "run": "1146",
          "timestamp": "2026-08-20T11:10:24.429Z",
          "duration": 435,
          "activities": [
            {
              "name": "Tess opens the dropdown",
              "outcome": "SUCCESS",
              "duration": 230,
              "children": [
                {
                  "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                  "outcome": "SUCCESS",
                  "duration": 219,
                  "children": [
                    {
                      "name": "Tess clicks on input field",
                      "outcome": "SUCCESS",
                      "duration": 67,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:25.244Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 110,
                        "column": 27
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-input-field-5a32e9ada1.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                      "outcome": "SUCCESS",
                      "duration": 34,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:25.353Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                        "line": 51,
                        "column": 22
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-waits-until-page-element-locat-eab5296c26.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:25.209Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 51,
                    "column": 22
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:10:25.208Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 51,
                "column": 22
              }
            },
            {
              "name": "Tess ensures that available options of dropdown does eventually equal [ \"First\", \"Second\", \"Third\" ]",
              "outcome": "SUCCESS",
              "duration": 29,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T11:10:25.450Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 53,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-available-options-4669f0a67a.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        }
      ],
      "cast": [
        {
          "name": "Tess",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://localhost:3100\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        }
      ]
    },
    {
      "name": "shows the available options when the menu is expanded",
      "category": "Dropdown",
      "outcome": "SUCCESS",
      "duration": 625,
      "startedAt": "2026-08-20T11:10:32.630Z",
      "source": {
        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
        "line": 43
      },
      "tags": [
        {
          "type": "theme",
          "name": "Components"
        },
        {
          "type": "capability",
          "name": "Dropdown"
        },
        {
          "type": "feature",
          "name": "Dropdown"
        },
        {
          "type": "project",
          "name": "firefox"
        },
        {
          "type": "platform",
          "name": "Linux 6.17.0-1022-azure"
        },
        {
          "type": "browser",
          "name": "firefox 153.0"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-ct-web-components-template"
        }
      ],
      "activities": [
        {
          "name": "Tess opens the dropdown",
          "outcome": "SUCCESS",
          "duration": 212,
          "children": [
            {
              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
              "outcome": "SUCCESS",
              "duration": 201,
              "children": [
                {
                  "name": "Tess clicks on input field",
                  "outcome": "SUCCESS",
                  "duration": 78,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T11:10:33.010Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                    "line": 110,
                    "column": 27
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-clicks-on-input-field-b029cbc9ff.png",
                      "type": "screenshot"
                    }
                  ]
                },
                {
                  "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                  "outcome": "SUCCESS",
                  "duration": 37,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T11:10:33.110Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 51,
                    "column": 22
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-waits-until-page-element-located-by-dee-14a718da3d.png",
                      "type": "screenshot"
                    }
                  ]
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:10:32.967Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 51,
                "column": 22
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T11:10:32.966Z",
          "location": {
            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
            "line": 51,
            "column": 22
          }
        },
        {
          "name": "Tess ensures that available options of dropdown does eventually equal [ \"First\", \"Second\", \"Third\" ]",
          "outcome": "SUCCESS",
          "duration": 36,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T11:10:33.189Z",
          "location": {
            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
            "line": 53,
            "column": 20
          },
          "artifacts": [
            {
              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-available-options-of-dropd-0a70479585.png",
              "type": "screenshot"
            }
          ]
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "1140",
          "timestamp": "2026-08-18T23:07:06.992Z",
          "duration": 608,
          "activities": [
            {
              "name": "Tess opens the dropdown",
              "outcome": "SUCCESS",
              "duration": 212,
              "children": [
                {
                  "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                  "outcome": "SUCCESS",
                  "duration": 201,
                  "children": [
                    {
                      "name": "Tess clicks on input field",
                      "outcome": "SUCCESS",
                      "duration": 82,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-18T23:07:15.506Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 110,
                        "column": 27
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-firefox-153-0-tess-clicks-on-input-field-b029cbc9ff.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                      "outcome": "SUCCESS",
                      "duration": 35,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-18T23:07:15.609Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                        "line": 51,
                        "column": 22
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-firefox-153-0-tess-waits-until-page-element-located-by-dee-52b8995c64.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-18T23:07:15.464Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 51,
                    "column": 22
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-18T23:07:15.463Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 51,
                "column": 22
              }
            },
            {
              "name": "Tess ensures that available options of dropdown does eventually equal [ \"First\", \"Second\", \"Third\" ]",
              "outcome": "SUCCESS",
              "duration": 35,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-18T23:07:15.687Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 53,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-firefox-153-0-tess-ensures-that-available-options-of-dropd-872a7e9dd7.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        },
        {
          "outcome": "SUCCESS",
          "run": "1144",
          "timestamp": "2026-08-20T11:08:32.384Z",
          "duration": 607,
          "activities": [
            {
              "name": "Tess opens the dropdown",
              "outcome": "SUCCESS",
              "duration": 215,
              "children": [
                {
                  "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                  "outcome": "SUCCESS",
                  "duration": 204,
                  "children": [
                    {
                      "name": "Tess clicks on input field",
                      "outcome": "SUCCESS",
                      "duration": 85,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:08:40.714Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 110,
                        "column": 27
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-clicks-on-input-field-b029cbc9ff.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                      "outcome": "SUCCESS",
                      "duration": 35,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:08:40.821Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                        "line": 51,
                        "column": 22
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-waits-until-page-element-located-by-dee-59160d9635.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:08:40.673Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 51,
                    "column": 22
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:08:40.672Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 51,
                "column": 22
              }
            },
            {
              "name": "Tess ensures that available options of dropdown does eventually equal [ \"First\", \"Second\", \"Third\" ]",
              "outcome": "SUCCESS",
              "duration": 34,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T11:08:40.898Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 53,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-available-options-of-dropd-7d5f381208.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        },
        {
          "outcome": "SUCCESS",
          "run": "1146",
          "timestamp": "2026-08-20T11:10:24.429Z",
          "duration": 625,
          "activities": [
            {
              "name": "Tess opens the dropdown",
              "outcome": "SUCCESS",
              "duration": 212,
              "children": [
                {
                  "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                  "outcome": "SUCCESS",
                  "duration": 201,
                  "children": [
                    {
                      "name": "Tess clicks on input field",
                      "outcome": "SUCCESS",
                      "duration": 78,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:33.010Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 110,
                        "column": 27
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-clicks-on-input-field-b029cbc9ff.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                      "outcome": "SUCCESS",
                      "duration": 37,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:33.110Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                        "line": 51,
                        "column": 22
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-waits-until-page-element-located-by-dee-14a718da3d.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:32.967Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 51,
                    "column": 22
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:10:32.966Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 51,
                "column": 22
              }
            },
            {
              "name": "Tess ensures that available options of dropdown does eventually equal [ \"First\", \"Second\", \"Third\" ]",
              "outcome": "SUCCESS",
              "duration": 36,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T11:10:33.189Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 53,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-available-options-of-dropd-0a70479585.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        }
      ],
      "cast": [
        {
          "name": "Tess",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://localhost:3100\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        }
      ]
    },
    {
      "name": "shows the available options when the menu is expanded",
      "category": "Dropdown",
      "outcome": "SUCCESS",
      "duration": 879,
      "startedAt": "2026-08-20T11:10:40.250Z",
      "source": {
        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
        "line": 43
      },
      "tags": [
        {
          "type": "theme",
          "name": "Components"
        },
        {
          "type": "capability",
          "name": "Dropdown"
        },
        {
          "type": "feature",
          "name": "Dropdown"
        },
        {
          "type": "project",
          "name": "webkit"
        },
        {
          "type": "platform",
          "name": "Linux 6.17.0-1022-azure"
        },
        {
          "type": "browser",
          "name": "webkit 26.5"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-ct-web-components-template"
        }
      ],
      "activities": [
        {
          "name": "Tess opens the dropdown",
          "outcome": "SUCCESS",
          "duration": 500,
          "children": [
            {
              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
              "outcome": "SUCCESS",
              "duration": 488,
              "children": [
                {
                  "name": "Tess clicks on input field",
                  "outcome": "SUCCESS",
                  "duration": 69,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T11:10:40.416Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                    "line": 110,
                    "column": 27
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-clicks-on-input-field-bea7f7b144.png",
                      "type": "screenshot"
                    }
                  ]
                },
                {
                  "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                  "outcome": "SUCCESS",
                  "duration": 35,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T11:10:40.648Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 51,
                    "column": 22
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-waits-until-page-element-located-by-deep--fccd1f2f36.png",
                      "type": "screenshot"
                    }
                  ]
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:10:40.381Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 51,
                "column": 22
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T11:10:40.380Z",
          "location": {
            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
            "line": 51,
            "column": 22
          }
        },
        {
          "name": "Tess ensures that available options of dropdown does eventually equal [ \"First\", \"Second\", \"Third\" ]",
          "outcome": "SUCCESS",
          "duration": 41,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T11:10:40.891Z",
          "location": {
            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
            "line": 53,
            "column": 20
          },
          "artifacts": [
            {
              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-available-options-of-dropdow-9ea98363bc.png",
              "type": "screenshot"
            }
          ]
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "1140",
          "timestamp": "2026-08-18T23:07:06.992Z",
          "duration": 905,
          "activities": [
            {
              "name": "Tess opens the dropdown",
              "outcome": "SUCCESS",
              "duration": 514,
              "children": [
                {
                  "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                  "outcome": "SUCCESS",
                  "duration": 502,
                  "children": [
                    {
                      "name": "Tess clicks on input field",
                      "outcome": "SUCCESS",
                      "duration": 73,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-18T23:07:22.819Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 110,
                        "column": 27
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-webkit-26-5-tess-clicks-on-input-field-bea7f7b144.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                      "outcome": "SUCCESS",
                      "duration": 48,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-18T23:07:23.055Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                        "line": 51,
                        "column": 22
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-webkit-26-5-tess-waits-until-page-element-located-by-deep--5e288d1757.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-18T23:07:22.791Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 51,
                    "column": 22
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-18T23:07:22.789Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 51,
                "column": 22
              }
            },
            {
              "name": "Tess ensures that available options of dropdown does eventually equal [ \"First\", \"Second\", \"Third\" ]",
              "outcome": "SUCCESS",
              "duration": 42,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-18T23:07:23.317Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 53,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-webkit-26-5-tess-ensures-that-available-options-of-dropdow-ea8faf42ef.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        },
        {
          "outcome": "SUCCESS",
          "run": "1144",
          "timestamp": "2026-08-20T11:08:32.384Z",
          "duration": 886,
          "activities": [
            {
              "name": "Tess opens the dropdown",
              "outcome": "SUCCESS",
              "duration": 499,
              "children": [
                {
                  "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                  "outcome": "SUCCESS",
                  "duration": 487,
                  "children": [
                    {
                      "name": "Tess clicks on input field",
                      "outcome": "SUCCESS",
                      "duration": 83,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:08:47.845Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 110,
                        "column": 27
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-clicks-on-input-field-bea7f7b144.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                      "outcome": "SUCCESS",
                      "duration": 35,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:08:48.092Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                        "line": 51,
                        "column": 22
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-waits-until-page-element-located-by-deep--0c2036b163.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:08:47.818Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 51,
                    "column": 22
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:08:47.817Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 51,
                "column": 22
              }
            },
            {
              "name": "Tess ensures that available options of dropdown does eventually equal [ \"First\", \"Second\", \"Third\" ]",
              "outcome": "SUCCESS",
              "duration": 39,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T11:08:48.329Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 53,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-available-options-of-dropdow-83df5514e6.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        },
        {
          "outcome": "SUCCESS",
          "run": "1146",
          "timestamp": "2026-08-20T11:10:24.429Z",
          "duration": 879,
          "activities": [
            {
              "name": "Tess opens the dropdown",
              "outcome": "SUCCESS",
              "duration": 500,
              "children": [
                {
                  "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                  "outcome": "SUCCESS",
                  "duration": 488,
                  "children": [
                    {
                      "name": "Tess clicks on input field",
                      "outcome": "SUCCESS",
                      "duration": 69,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:40.416Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 110,
                        "column": 27
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-clicks-on-input-field-bea7f7b144.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                      "outcome": "SUCCESS",
                      "duration": 35,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:40.648Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                        "line": 51,
                        "column": 22
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-waits-until-page-element-located-by-deep--fccd1f2f36.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:40.381Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 51,
                    "column": 22
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:10:40.380Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 51,
                "column": 22
              }
            },
            {
              "name": "Tess ensures that available options of dropdown does eventually equal [ \"First\", \"Second\", \"Third\" ]",
              "outcome": "SUCCESS",
              "duration": 41,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T11:10:40.891Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 53,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-available-options-of-dropdow-9ea98363bc.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        }
      ],
      "cast": [
        {
          "name": "Tess",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://localhost:3100\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        }
      ]
    },
    {
      "name": "selects the desired options",
      "category": "Dropdown",
      "outcome": "SUCCESS",
      "duration": 887,
      "startedAt": "2026-08-20T11:10:25.545Z",
      "source": {
        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
        "line": 60
      },
      "tags": [
        {
          "type": "theme",
          "name": "Components"
        },
        {
          "type": "capability",
          "name": "Dropdown"
        },
        {
          "type": "feature",
          "name": "Dropdown"
        },
        {
          "type": "project",
          "name": "chromium"
        },
        {
          "type": "platform",
          "name": "Linux 6.17.0-1022-azure"
        },
        {
          "type": "browser",
          "name": "chromium 151.0.7922.34"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-ct-web-components-template"
        }
      ],
      "activities": [
        {
          "name": "Tess selects [ 'First', 'Third' ] from dropdown",
          "outcome": "SUCCESS",
          "duration": 719,
          "children": [
            {
              "name": "Tess iterates over [ 'First', 'Third' ]",
              "outcome": "SUCCESS",
              "duration": 708,
              "children": [
                {
                  "name": "Tess selects 'First' from dropdown",
                  "outcome": "SUCCESS",
                  "duration": 396,
                  "children": [
                    {
                      "name": "Tess opens the dropdown",
                      "outcome": "SUCCESS",
                      "duration": 190,
                      "children": [
                        {
                          "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                          "outcome": "SUCCESS",
                          "duration": 178,
                          "children": [
                            {
                              "name": "Tess clicks on input field",
                              "outcome": "SUCCESS",
                              "duration": 49,
                              "children": [],
                              "type": "Interaction",
                              "startedAt": "2026-08-20T11:10:25.708Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 110,
                                "column": 27
                              },
                              "artifacts": [
                                {
                                  "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-input-field-5a32e9ada1.png",
                                  "type": "screenshot"
                                }
                              ]
                            },
                            {
                              "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                              "outcome": "SUCCESS",
                              "duration": 26,
                              "children": [],
                              "type": "Interaction",
                              "startedAt": "2026-08-20T11:10:25.799Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              },
                              "artifacts": [
                                {
                                  "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-waits-until-page-element-locat-bfc16cca9d.png",
                                  "type": "screenshot"
                                }
                              ]
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:25.687Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:25.686Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 92,
                        "column": 26
                      }
                    },
                    {
                      "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"First\"",
                      "outcome": "SUCCESS",
                      "duration": 104,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:25.887Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 93,
                        "column": 23
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-the-first-of-page-el-cd201c4154.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"First\"",
                      "outcome": "SUCCESS",
                      "duration": 8,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:26.033Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                        "line": 60,
                        "column": 13
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-the-text-of-page--2bb8c765ea.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:25.686Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                    "line": 72,
                    "column": 50
                  }
                },
                {
                  "name": "Tess selects 'Third' from dropdown",
                  "outcome": "SUCCESS",
                  "duration": 221,
                  "children": [
                    {
                      "name": "Tess opens the dropdown",
                      "outcome": "SUCCESS",
                      "duration": 16,
                      "children": [
                        {
                          "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                          "outcome": "SUCCESS",
                          "duration": 4,
                          "children": [],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:26.120Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:26.119Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 92,
                        "column": 26
                      }
                    },
                    {
                      "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Third\"",
                      "outcome": "SUCCESS",
                      "duration": 110,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:26.147Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 93,
                        "column": 23
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-the-first-of-page-el-1e6e1e48f4.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Third\"",
                      "outcome": "SUCCESS",
                      "duration": 10,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:26.300Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                        "line": 60,
                        "column": 13
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-the-text-of-page--1e15c82be0.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:26.119Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                    "line": 72,
                    "column": 50
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:10:25.642Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 72,
                "column": 16
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T11:10:25.641Z",
          "location": {
            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
            "line": 72,
            "column": 16
          }
        },
        {
          "name": "Tess ensures that selected options does equal [ \"First\", \"Third\" ]",
          "outcome": "SUCCESS",
          "duration": 12,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T11:10:26.371Z",
          "location": {
            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
            "line": 74,
            "column": 20
          },
          "artifacts": [
            {
              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-selected-options--1e15c82be0.png",
              "type": "screenshot"
            }
          ]
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "1140",
          "timestamp": "2026-08-18T23:07:06.992Z",
          "duration": 891,
          "activities": [
            {
              "name": "Tess selects [ 'First', 'Third' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 726,
              "children": [
                {
                  "name": "Tess iterates over [ 'First', 'Third' ]",
                  "outcome": "SUCCESS",
                  "duration": 714,
                  "children": [
                    {
                      "name": "Tess selects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 401,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 186,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 175,
                              "children": [
                                {
                                  "name": "Tess clicks on input field",
                                  "outcome": "SUCCESS",
                                  "duration": 55,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-18T23:07:08.209Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 110,
                                    "column": 27
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-input-field-5a32e9ada1.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                },
                                {
                                  "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                                  "outcome": "SUCCESS",
                                  "duration": 26,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-18T23:07:08.308Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 92,
                                    "column": 26
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-chromium-151-0-7922-34-tess-waits-until-page-element-locat-bfc16cca9d.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                }
                              ],
                              "type": "Task",
                              "startedAt": "2026-08-18T23:07:08.189Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-18T23:07:08.188Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 111,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:08.386Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-the-first-of-page-el-cd201c4154.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 8,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:08.539Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-the-text-of-page--2bb8c765ea.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-18T23:07:08.187Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    },
                    {
                      "name": "Tess selects 'Third' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 222,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 15,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 5,
                              "children": [],
                              "type": "Task",
                              "startedAt": "2026-08-18T23:07:08.626Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-18T23:07:08.626Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 111,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:08.653Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-the-first-of-page-el-1e6e1e48f4.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 11,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:08.806Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-the-text-of-page--1e15c82be0.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-18T23:07:08.625Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-18T23:07:08.143Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 72,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-18T23:07:08.142Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 72,
                "column": 16
              }
            },
            {
              "name": "Tess ensures that selected options does equal [ \"First\", \"Third\" ]",
              "outcome": "SUCCESS",
              "duration": 11,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-18T23:07:08.879Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 74,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-selected-options--1e15c82be0.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        },
        {
          "outcome": "SUCCESS",
          "run": "1144",
          "timestamp": "2026-08-20T11:08:32.384Z",
          "duration": 887,
          "activities": [
            {
              "name": "Tess selects [ 'First', 'Third' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 724,
              "children": [
                {
                  "name": "Tess iterates over [ 'First', 'Third' ]",
                  "outcome": "SUCCESS",
                  "duration": 713,
                  "children": [
                    {
                      "name": "Tess selects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 397,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 192,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 183,
                              "children": [
                                {
                                  "name": "Tess clicks on input field",
                                  "outcome": "SUCCESS",
                                  "duration": 54,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-20T11:08:33.598Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 110,
                                    "column": 27
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-input-field-5a32e9ada1.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                },
                                {
                                  "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                                  "outcome": "SUCCESS",
                                  "duration": 25,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-20T11:08:33.695Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 92,
                                    "column": 26
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-waits-until-page-element-locat-bfc16cca9d.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                }
                              ],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:08:33.578Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:08:33.578Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 104,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:33.781Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-the-first-of-page-el-cd201c4154.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 8,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:33.926Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-the-text-of-page--2bb8c765ea.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:08:33.577Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    },
                    {
                      "name": "Tess selects 'Third' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 226,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 15,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 5,
                              "children": [],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:08:34.011Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:08:34.011Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 115,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:34.037Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-the-first-of-page-el-1e15c82be0.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 10,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:34.195Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-the-text-of-page--1e15c82be0.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:08:34.010Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:08:33.533Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 72,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:08:33.532Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 72,
                "column": 16
              }
            },
            {
              "name": "Tess ensures that selected options does equal [ \"First\", \"Third\" ]",
              "outcome": "SUCCESS",
              "duration": 12,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T11:08:34.267Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 74,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-selected-options--1e15c82be0.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        },
        {
          "outcome": "SUCCESS",
          "run": "1146",
          "timestamp": "2026-08-20T11:10:24.429Z",
          "duration": 887,
          "activities": [
            {
              "name": "Tess selects [ 'First', 'Third' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 719,
              "children": [
                {
                  "name": "Tess iterates over [ 'First', 'Third' ]",
                  "outcome": "SUCCESS",
                  "duration": 708,
                  "children": [
                    {
                      "name": "Tess selects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 396,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 190,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 178,
                              "children": [
                                {
                                  "name": "Tess clicks on input field",
                                  "outcome": "SUCCESS",
                                  "duration": 49,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-20T11:10:25.708Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 110,
                                    "column": 27
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-input-field-5a32e9ada1.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                },
                                {
                                  "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                                  "outcome": "SUCCESS",
                                  "duration": 26,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-20T11:10:25.799Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 92,
                                    "column": 26
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-waits-until-page-element-locat-bfc16cca9d.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                }
                              ],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:10:25.687Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:25.686Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 104,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:25.887Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-the-first-of-page-el-cd201c4154.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 8,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:26.033Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-the-text-of-page--2bb8c765ea.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:25.686Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    },
                    {
                      "name": "Tess selects 'Third' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 221,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 16,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 4,
                              "children": [],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:10:26.120Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:26.119Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 110,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:26.147Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-the-first-of-page-el-1e6e1e48f4.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 10,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:26.300Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-the-text-of-page--1e15c82be0.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:26.119Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:25.642Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 72,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:10:25.641Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 72,
                "column": 16
              }
            },
            {
              "name": "Tess ensures that selected options does equal [ \"First\", \"Third\" ]",
              "outcome": "SUCCESS",
              "duration": 12,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T11:10:26.371Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 74,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-selected-options--1e15c82be0.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        }
      ],
      "cast": [
        {
          "name": "Tess",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://localhost:3100\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        }
      ]
    },
    {
      "name": "selects the desired options",
      "category": "Dropdown",
      "outcome": "SUCCESS",
      "duration": 972,
      "startedAt": "2026-08-20T11:10:33.282Z",
      "source": {
        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
        "line": 60
      },
      "tags": [
        {
          "type": "theme",
          "name": "Components"
        },
        {
          "type": "capability",
          "name": "Dropdown"
        },
        {
          "type": "feature",
          "name": "Dropdown"
        },
        {
          "type": "project",
          "name": "firefox"
        },
        {
          "type": "platform",
          "name": "Linux 6.17.0-1022-azure"
        },
        {
          "type": "browser",
          "name": "firefox 153.0"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-ct-web-components-template"
        }
      ],
      "activities": [
        {
          "name": "Tess selects [ 'First', 'Third' ] from dropdown",
          "outcome": "SUCCESS",
          "duration": 723,
          "children": [
            {
              "name": "Tess iterates over [ 'First', 'Third' ]",
              "outcome": "SUCCESS",
              "duration": 711,
              "children": [
                {
                  "name": "Tess selects 'First' from dropdown",
                  "outcome": "SUCCESS",
                  "duration": 385,
                  "children": [
                    {
                      "name": "Tess opens the dropdown",
                      "outcome": "SUCCESS",
                      "duration": 186,
                      "children": [
                        {
                          "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                          "outcome": "SUCCESS",
                          "duration": 174,
                          "children": [
                            {
                              "name": "Tess clicks on input field",
                              "outcome": "SUCCESS",
                              "duration": 70,
                              "children": [],
                              "type": "Interaction",
                              "startedAt": "2026-08-20T11:10:33.536Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 110,
                                "column": 27
                              },
                              "artifacts": [
                                {
                                  "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-clicks-on-input-field-b029cbc9ff.png",
                                  "type": "screenshot"
                                }
                              ]
                            },
                            {
                              "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                              "outcome": "SUCCESS",
                              "duration": 32,
                              "children": [],
                              "type": "Interaction",
                              "startedAt": "2026-08-20T11:10:33.628Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              },
                              "artifacts": [
                                {
                                  "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-waits-until-page-element-located-by-dee-660271b181.png",
                                  "type": "screenshot"
                                }
                              ]
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:33.506Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:33.505Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 92,
                        "column": 26
                      }
                    },
                    {
                      "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"First\"",
                      "outcome": "SUCCESS",
                      "duration": 134,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:33.702Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 93,
                        "column": 23
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-clicks-on-the-first-of-page-elements-lo-20ca1b10e1.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"First\"",
                      "outcome": "SUCCESS",
                      "duration": 11,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:33.857Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                        "line": 60,
                        "column": 13
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-the-text-of-page-elements--c794280fe4.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:33.504Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                    "line": 72,
                    "column": 50
                  }
                },
                {
                  "name": "Tess selects 'Third' from dropdown",
                  "outcome": "SUCCESS",
                  "duration": 232,
                  "children": [
                    {
                      "name": "Tess opens the dropdown",
                      "outcome": "SUCCESS",
                      "duration": 17,
                      "children": [
                        {
                          "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                          "outcome": "SUCCESS",
                          "duration": 6,
                          "children": [],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:33.927Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:33.927Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 92,
                        "column": 26
                      }
                    },
                    {
                      "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Third\"",
                      "outcome": "SUCCESS",
                      "duration": 147,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:33.955Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 93,
                        "column": 23
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-clicks-on-the-first-of-page-elements-lo-f3d4310ad9.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Third\"",
                      "outcome": "SUCCESS",
                      "duration": 14,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:34.124Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                        "line": 60,
                        "column": 13
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-the-text-of-page-elements--f3d4310ad9.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:33.926Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                    "line": 72,
                    "column": 50
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:10:33.457Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 72,
                "column": 16
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T11:10:33.456Z",
          "location": {
            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
            "line": 72,
            "column": 16
          }
        },
        {
          "name": "Tess ensures that selected options does equal [ \"First\", \"Third\" ]",
          "outcome": "SUCCESS",
          "duration": 13,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T11:10:34.190Z",
          "location": {
            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
            "line": 74,
            "column": 20
          },
          "artifacts": [
            {
              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-selected-options-does-equa-f3d4310ad9.png",
              "type": "screenshot"
            }
          ]
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "1140",
          "timestamp": "2026-08-18T23:07:06.992Z",
          "duration": 982,
          "activities": [
            {
              "name": "Tess selects [ 'First', 'Third' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 711,
              "children": [
                {
                  "name": "Tess iterates over [ 'First', 'Third' ]",
                  "outcome": "SUCCESS",
                  "duration": 700,
                  "children": [
                    {
                      "name": "Tess selects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 377,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 193,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 182,
                              "children": [
                                {
                                  "name": "Tess clicks on input field",
                                  "outcome": "SUCCESS",
                                  "duration": 80,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-18T23:07:16.058Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 110,
                                    "column": 27
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-firefox-153-0-tess-clicks-on-input-field-b029cbc9ff.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                },
                                {
                                  "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                                  "outcome": "SUCCESS",
                                  "duration": 31,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-18T23:07:16.159Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 92,
                                    "column": 26
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-firefox-153-0-tess-waits-until-page-element-located-by-dee-e2143a8ceb.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                }
                              ],
                              "type": "Task",
                              "startedAt": "2026-08-18T23:07:16.028Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-18T23:07:16.028Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 120,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:16.232Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-firefox-153-0-tess-clicks-on-the-first-of-page-elements-lo-4c0a999493.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 10,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:16.374Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-firefox-153-0-tess-ensures-that-the-text-of-page-elements--7cae01b4cf.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-18T23:07:16.027Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    },
                    {
                      "name": "Tess selects 'Third' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 233,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 17,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 5,
                              "children": [],
                              "type": "Task",
                              "startedAt": "2026-08-18T23:07:16.441Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-18T23:07:16.440Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 150,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:16.468Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-firefox-153-0-tess-clicks-on-the-first-of-page-elements-lo-734e9b3a69.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 13,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:16.639Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-firefox-153-0-tess-ensures-that-the-text-of-page-elements--f3d4310ad9.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-18T23:07:16.439Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-18T23:07:15.982Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 72,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-18T23:07:15.981Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 72,
                "column": 16
              }
            },
            {
              "name": "Tess ensures that selected options does equal [ \"First\", \"Third\" ]",
              "outcome": "SUCCESS",
              "duration": 13,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-18T23:07:16.703Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 74,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-firefox-153-0-tess-ensures-that-selected-options-does-equa-f3d4310ad9.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        },
        {
          "outcome": "SUCCESS",
          "run": "1144",
          "timestamp": "2026-08-20T11:08:32.384Z",
          "duration": 902,
          "activities": [
            {
              "name": "Tess selects [ 'First', 'Third' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 666,
              "children": [
                {
                  "name": "Tess iterates over [ 'First', 'Third' ]",
                  "outcome": "SUCCESS",
                  "duration": 656,
                  "children": [
                    {
                      "name": "Tess selects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 369,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 192,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 181,
                              "children": [
                                {
                                  "name": "Tess clicks on input field",
                                  "outcome": "SUCCESS",
                                  "duration": 69,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-20T11:08:41.211Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 110,
                                    "column": 27
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-clicks-on-input-field-b029cbc9ff.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                },
                                {
                                  "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                                  "outcome": "SUCCESS",
                                  "duration": 41,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-20T11:08:41.301Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 92,
                                    "column": 26
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-waits-until-page-element-located-by-dee-681b6fa7a4.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                }
                              ],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:08:41.182Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:08:41.181Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 112,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:41.385Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-clicks-on-the-first-of-page-elements-lo-99b129b326.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 9,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:41.519Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-the-text-of-page-elements--f506f4374f.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:08:41.180Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    },
                    {
                      "name": "Tess selects 'Third' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 214,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 35,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 24,
                              "children": [],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:08:41.587Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:08:41.586Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 113,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:41.632Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-clicks-on-the-first-of-page-elements-lo-fe71e38b0d.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 13,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:41.767Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-the-text-of-page-elements--f3d4310ad9.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:08:41.586Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:08:41.154Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 72,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:08:41.154Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 72,
                "column": 16
              }
            },
            {
              "name": "Tess ensures that selected options does equal [ \"First\", \"Third\" ]",
              "outcome": "SUCCESS",
              "duration": 16,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T11:08:41.832Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 74,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-selected-options-does-equa-f3d4310ad9.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        },
        {
          "outcome": "SUCCESS",
          "run": "1146",
          "timestamp": "2026-08-20T11:10:24.429Z",
          "duration": 972,
          "activities": [
            {
              "name": "Tess selects [ 'First', 'Third' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 723,
              "children": [
                {
                  "name": "Tess iterates over [ 'First', 'Third' ]",
                  "outcome": "SUCCESS",
                  "duration": 711,
                  "children": [
                    {
                      "name": "Tess selects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 385,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 186,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 174,
                              "children": [
                                {
                                  "name": "Tess clicks on input field",
                                  "outcome": "SUCCESS",
                                  "duration": 70,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-20T11:10:33.536Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 110,
                                    "column": 27
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-clicks-on-input-field-b029cbc9ff.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                },
                                {
                                  "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                                  "outcome": "SUCCESS",
                                  "duration": 32,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-20T11:10:33.628Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 92,
                                    "column": 26
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-waits-until-page-element-located-by-dee-660271b181.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                }
                              ],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:10:33.506Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:33.505Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 134,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:33.702Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-clicks-on-the-first-of-page-elements-lo-20ca1b10e1.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 11,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:33.857Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-the-text-of-page-elements--c794280fe4.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:33.504Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    },
                    {
                      "name": "Tess selects 'Third' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 232,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 17,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 6,
                              "children": [],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:10:33.927Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:33.927Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 147,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:33.955Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-clicks-on-the-first-of-page-elements-lo-f3d4310ad9.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 14,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:34.124Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-the-text-of-page-elements--f3d4310ad9.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:33.926Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:33.457Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 72,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:10:33.456Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 72,
                "column": 16
              }
            },
            {
              "name": "Tess ensures that selected options does equal [ \"First\", \"Third\" ]",
              "outcome": "SUCCESS",
              "duration": 13,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T11:10:34.190Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 74,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-selected-options-does-equa-f3d4310ad9.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        }
      ],
      "cast": [
        {
          "name": "Tess",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://localhost:3100\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        }
      ]
    },
    {
      "name": "selects the desired options",
      "category": "Dropdown",
      "outcome": "SUCCESS",
      "duration": 1908,
      "startedAt": "2026-08-20T11:10:41.153Z",
      "source": {
        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
        "line": 60
      },
      "tags": [
        {
          "type": "theme",
          "name": "Components"
        },
        {
          "type": "capability",
          "name": "Dropdown"
        },
        {
          "type": "feature",
          "name": "Dropdown"
        },
        {
          "type": "project",
          "name": "webkit"
        },
        {
          "type": "platform",
          "name": "Linux 6.17.0-1022-azure"
        },
        {
          "type": "browser",
          "name": "webkit 26.5"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-ct-web-components-template"
        }
      ],
      "activities": [
        {
          "name": "Tess selects [ 'First', 'Third' ] from dropdown",
          "outcome": "SUCCESS",
          "duration": 1580,
          "children": [
            {
              "name": "Tess iterates over [ 'First', 'Third' ]",
              "outcome": "SUCCESS",
              "duration": 1569,
              "children": [
                {
                  "name": "Tess selects 'First' from dropdown",
                  "outcome": "SUCCESS",
                  "duration": 1013,
                  "children": [
                    {
                      "name": "Tess opens the dropdown",
                      "outcome": "SUCCESS",
                      "duration": 557,
                      "children": [
                        {
                          "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                          "outcome": "SUCCESS",
                          "duration": 547,
                          "children": [
                            {
                              "name": "Tess clicks on input field",
                              "outcome": "SUCCESS",
                              "duration": 75,
                              "children": [],
                              "type": "Interaction",
                              "startedAt": "2026-08-20T11:10:41.333Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 110,
                                "column": 27
                              },
                              "artifacts": [
                                {
                                  "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-clicks-on-input-field-bea7f7b144.png",
                                  "type": "screenshot"
                                }
                              ]
                            },
                            {
                              "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                              "outcome": "SUCCESS",
                              "duration": 64,
                              "children": [],
                              "type": "Interaction",
                              "startedAt": "2026-08-20T11:10:41.572Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              },
                              "artifacts": [
                                {
                                  "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-waits-until-page-element-located-by-deep--9d440dd8ca.png",
                                  "type": "screenshot"
                                }
                              ]
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:41.309Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:41.309Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 92,
                        "column": 26
                      }
                    },
                    {
                      "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"First\"",
                      "outcome": "SUCCESS",
                      "duration": 103,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:41.878Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 93,
                        "column": 23
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-clicks-on-the-first-of-page-elements-loca-efccbf4739.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"First\"",
                      "outcome": "SUCCESS",
                      "duration": 11,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:42.146Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                        "line": 60,
                        "column": 13
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-the-text-of-page-elements-lo-efccbf4739.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:41.308Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                    "line": 72,
                    "column": 50
                  }
                },
                {
                  "name": "Tess selects 'Third' from dropdown",
                  "outcome": "SUCCESS",
                  "duration": 480,
                  "children": [
                    {
                      "name": "Tess opens the dropdown",
                      "outcome": "SUCCESS",
                      "duration": 28,
                      "children": [
                        {
                          "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                          "outcome": "SUCCESS",
                          "duration": 17,
                          "children": [],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:42.360Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:42.359Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 92,
                        "column": 26
                      }
                    },
                    {
                      "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Third\"",
                      "outcome": "SUCCESS",
                      "duration": 97,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:42.398Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 93,
                        "column": 23
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-clicks-on-the-first-of-page-elements-loca-7c194d682c.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Third\"",
                      "outcome": "SUCCESS",
                      "duration": 12,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:42.659Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                        "line": 60,
                        "column": 13
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-the-text-of-page-elements-lo-7c194d682c.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:42.358Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                    "line": 72,
                    "column": 50
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:10:41.279Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 72,
                "column": 16
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T11:10:41.279Z",
          "location": {
            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
            "line": 72,
            "column": 16
          }
        },
        {
          "name": "Tess ensures that selected options does equal [ \"First\", \"Third\" ]",
          "outcome": "SUCCESS",
          "duration": 11,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T11:10:42.870Z",
          "location": {
            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
            "line": 74,
            "column": 20
          },
          "artifacts": [
            {
              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-selected-options-does-equal--7c194d682c.png",
              "type": "screenshot"
            }
          ]
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "1140",
          "timestamp": "2026-08-18T23:07:06.992Z",
          "duration": 1849,
          "activities": [
            {
              "name": "Tess selects [ 'First', 'Third' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 1535,
              "children": [
                {
                  "name": "Tess iterates over [ 'First', 'Third' ]",
                  "outcome": "SUCCESS",
                  "duration": 1523,
                  "children": [
                    {
                      "name": "Tess selects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 976,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 522,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 511,
                              "children": [
                                {
                                  "name": "Tess clicks on input field",
                                  "outcome": "SUCCESS",
                                  "duration": 73,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-18T23:07:23.743Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 110,
                                    "column": 27
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-webkit-26-5-tess-clicks-on-input-field-bea7f7b144.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                },
                                {
                                  "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                                  "outcome": "SUCCESS",
                                  "duration": 43,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-18T23:07:23.980Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 92,
                                    "column": 26
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-webkit-26-5-tess-waits-until-page-element-located-by-deep--5ace5ff226.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                }
                              ],
                              "type": "Task",
                              "startedAt": "2026-08-18T23:07:23.719Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-18T23:07:23.718Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 107,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:24.251Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-webkit-26-5-tess-clicks-on-the-first-of-page-elements-loca-efccbf4739.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 8,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:24.520Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-webkit-26-5-tess-ensures-that-the-text-of-page-elements-lo-efccbf4739.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-18T23:07:23.717Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    },
                    {
                      "name": "Tess selects 'Third' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 469,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 34,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 23,
                              "children": [],
                              "type": "Task",
                              "startedAt": "2026-08-18T23:07:24.735Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-18T23:07:24.734Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 89,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:24.779Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-webkit-26-5-tess-clicks-on-the-first-of-page-elements-loca-7c194d682c.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 11,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:25.029Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-webkit-26-5-tess-ensures-that-the-text-of-page-elements-lo-7c194d682c.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-18T23:07:24.734Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-18T23:07:23.691Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 72,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-18T23:07:23.689Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 72,
                "column": 16
              }
            },
            {
              "name": "Tess ensures that selected options does equal [ \"First\", \"Third\" ]",
              "outcome": "SUCCESS",
              "duration": 11,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-18T23:07:25.235Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 74,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-webkit-26-5-tess-ensures-that-selected-options-does-equal--7c194d682c.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        },
        {
          "outcome": "SUCCESS",
          "run": "1144",
          "timestamp": "2026-08-20T11:08:32.384Z",
          "duration": 1859,
          "activities": [
            {
              "name": "Tess selects [ 'First', 'Third' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 1558,
              "children": [
                {
                  "name": "Tess iterates over [ 'First', 'Third' ]",
                  "outcome": "SUCCESS",
                  "duration": 1546,
                  "children": [
                    {
                      "name": "Tess selects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 989,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 534,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 522,
                              "children": [
                                {
                                  "name": "Tess clicks on input field",
                                  "outcome": "SUCCESS",
                                  "duration": 88,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-20T11:08:48.748Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 110,
                                    "column": 27
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-clicks-on-input-field-bea7f7b144.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                },
                                {
                                  "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                                  "outcome": "SUCCESS",
                                  "duration": 40,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-20T11:08:48.999Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 92,
                                    "column": 26
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-waits-until-page-element-located-by-deep--1a622c2063.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                }
                              ],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:08:48.725Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:08:48.724Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 106,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:49.269Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-clicks-on-the-first-of-page-elements-loca-efccbf4739.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 10,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:49.538Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-the-text-of-page-elements-lo-efccbf4739.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:08:48.724Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    },
                    {
                      "name": "Tess selects 'Third' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 463,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 20,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 10,
                              "children": [],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:08:49.772Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:08:49.772Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 84,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:49.803Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-clicks-on-the-first-of-page-elements-loca-7c194d682c.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 12,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:50.049Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-the-text-of-page-elements-lo-7c194d682c.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:08:49.771Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:08:48.698Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 72,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:08:48.697Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 72,
                "column": 16
              }
            },
            {
              "name": "Tess ensures that selected options does equal [ \"First\", \"Third\" ]",
              "outcome": "SUCCESS",
              "duration": 11,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T11:08:50.265Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 74,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-selected-options-does-equal--7c194d682c.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        },
        {
          "outcome": "SUCCESS",
          "run": "1146",
          "timestamp": "2026-08-20T11:10:24.429Z",
          "duration": 1908,
          "activities": [
            {
              "name": "Tess selects [ 'First', 'Third' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 1580,
              "children": [
                {
                  "name": "Tess iterates over [ 'First', 'Third' ]",
                  "outcome": "SUCCESS",
                  "duration": 1569,
                  "children": [
                    {
                      "name": "Tess selects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 1013,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 557,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 547,
                              "children": [
                                {
                                  "name": "Tess clicks on input field",
                                  "outcome": "SUCCESS",
                                  "duration": 75,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-20T11:10:41.333Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 110,
                                    "column": 27
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-clicks-on-input-field-bea7f7b144.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                },
                                {
                                  "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                                  "outcome": "SUCCESS",
                                  "duration": 64,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-20T11:10:41.572Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 92,
                                    "column": 26
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-waits-until-page-element-located-by-deep--9d440dd8ca.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                }
                              ],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:10:41.309Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:41.309Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 103,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:41.878Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-clicks-on-the-first-of-page-elements-loca-efccbf4739.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 11,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:42.146Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-the-text-of-page-elements-lo-efccbf4739.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:41.308Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    },
                    {
                      "name": "Tess selects 'Third' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 480,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 28,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 17,
                              "children": [],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:10:42.360Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:42.359Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 97,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:42.398Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-clicks-on-the-first-of-page-elements-loca-7c194d682c.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 12,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:42.659Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-the-text-of-page-elements-lo-7c194d682c.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:42.358Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:41.279Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 72,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:10:41.279Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 72,
                "column": 16
              }
            },
            {
              "name": "Tess ensures that selected options does equal [ \"First\", \"Third\" ]",
              "outcome": "SUCCESS",
              "duration": 11,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T11:10:42.870Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 74,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-selected-options-does-equal--7c194d682c.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        }
      ],
      "cast": [
        {
          "name": "Tess",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://localhost:3100\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        }
      ]
    },
    {
      "name": "triggers onChange with selected options",
      "category": "Dropdown",
      "outcome": "SUCCESS",
      "duration": 839,
      "startedAt": "2026-08-20T11:10:26.462Z",
      "source": {
        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
        "line": 81
      },
      "tags": [
        {
          "type": "theme",
          "name": "Components"
        },
        {
          "type": "capability",
          "name": "Dropdown"
        },
        {
          "type": "feature",
          "name": "Dropdown"
        },
        {
          "type": "project",
          "name": "chromium"
        },
        {
          "type": "platform",
          "name": "Linux 6.17.0-1022-azure"
        },
        {
          "type": "browser",
          "name": "chromium 151.0.7922.34"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-ct-web-components-template"
        }
      ],
      "activities": [
        {
          "name": "Tess selects [ 'First', 'Third' ] from dropdown",
          "outcome": "SUCCESS",
          "duration": 675,
          "children": [
            {
              "name": "Tess iterates over [ 'First', 'Third' ]",
              "outcome": "SUCCESS",
              "duration": 664,
              "children": [
                {
                  "name": "Tess selects 'First' from dropdown",
                  "outcome": "SUCCESS",
                  "duration": 388,
                  "children": [
                    {
                      "name": "Tess opens the dropdown",
                      "outcome": "SUCCESS",
                      "duration": 201,
                      "children": [
                        {
                          "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                          "outcome": "SUCCESS",
                          "duration": 188,
                          "children": [
                            {
                              "name": "Tess clicks on input field",
                              "outcome": "SUCCESS",
                              "duration": 55,
                              "children": [],
                              "type": "Interaction",
                              "startedAt": "2026-08-20T11:10:26.603Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 110,
                                "column": 27
                              },
                              "artifacts": [
                                {
                                  "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-input-field-5a32e9ada1.png",
                                  "type": "screenshot"
                                }
                              ]
                            },
                            {
                              "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                              "outcome": "SUCCESS",
                              "duration": 26,
                              "children": [],
                              "type": "Interaction",
                              "startedAt": "2026-08-20T11:10:26.701Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              },
                              "artifacts": [
                                {
                                  "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-waits-until-page-element-locat-bfc16cca9d.png",
                                  "type": "screenshot"
                                }
                              ]
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:26.579Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:26.578Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 92,
                        "column": 26
                      }
                    },
                    {
                      "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"First\"",
                      "outcome": "SUCCESS",
                      "duration": 86,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:26.790Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 93,
                        "column": 23
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-the-first-of-page-el-f3bb44e501.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"First\"",
                      "outcome": "SUCCESS",
                      "duration": 7,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:26.917Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                        "line": 60,
                        "column": 13
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-the-text-of-page--db7313f6f2.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:26.578Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                    "line": 72,
                    "column": 50
                  }
                },
                {
                  "name": "Tess selects 'Third' from dropdown",
                  "outcome": "SUCCESS",
                  "duration": 205,
                  "children": [
                    {
                      "name": "Tess opens the dropdown",
                      "outcome": "SUCCESS",
                      "duration": 20,
                      "children": [
                        {
                          "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                          "outcome": "SUCCESS",
                          "duration": 8,
                          "children": [],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:27.003Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:27.002Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 92,
                        "column": 26
                      }
                    },
                    {
                      "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Third\"",
                      "outcome": "SUCCESS",
                      "duration": 92,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:27.033Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 93,
                        "column": 23
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-the-first-of-page-el-e660a11a20.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Third\"",
                      "outcome": "SUCCESS",
                      "duration": 10,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:27.165Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                        "line": 60,
                        "column": 13
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-the-text-of-page--1e15c82be0.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:27.001Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                    "line": 72,
                    "column": 50
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:10:26.553Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 104,
                "column": 16
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T11:10:26.552Z",
          "location": {
            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
            "line": 104,
            "column": 16
          }
        },
        {
          "name": "Tess ensures that a note of selectedOptions does eventually equal [ { label: \"First\", value: \"first\" }, { label: \"Third\", value: \"third\" } ]",
          "outcome": "SUCCESS",
          "duration": 11,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T11:10:27.238Z",
          "location": {
            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
            "line": 106,
            "column": 20
          },
          "artifacts": [
            {
              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-----value---first-1e15c82be0.png",
              "type": "screenshot"
            }
          ]
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "1140",
          "timestamp": "2026-08-18T23:07:06.992Z",
          "duration": 845,
          "activities": [
            {
              "name": "Tess selects [ 'First', 'Third' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 686,
              "children": [
                {
                  "name": "Tess iterates over [ 'First', 'Third' ]",
                  "outcome": "SUCCESS",
                  "duration": 674,
                  "children": [
                    {
                      "name": "Tess selects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 393,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 195,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 184,
                              "children": [
                                {
                                  "name": "Tess clicks on input field",
                                  "outcome": "SUCCESS",
                                  "duration": 60,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-18T23:07:09.105Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 110,
                                    "column": 27
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-input-field-5a32e9ada1.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                },
                                {
                                  "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                                  "outcome": "SUCCESS",
                                  "duration": 26,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-18T23:07:09.207Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 92,
                                    "column": 26
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-chromium-151-0-7922-34-tess-waits-until-page-element-locat-bfc16cca9d.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                }
                              ],
                              "type": "Task",
                              "startedAt": "2026-08-18T23:07:09.080Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-18T23:07:09.079Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 96,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:09.286Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-the-first-of-page-el-f3bb44e501.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 9,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:09.423Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-the-text-of-page--db7313f6f2.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-18T23:07:09.079Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    },
                    {
                      "name": "Tess selects 'Third' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 208,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 21,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 9,
                              "children": [],
                              "type": "Task",
                              "startedAt": "2026-08-18T23:07:09.510Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-18T23:07:09.509Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 90,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:09.541Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-the-first-of-page-el-e660a11a20.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 11,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:09.674Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-the-text-of-page--1e15c82be0.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-18T23:07:09.508Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-18T23:07:09.052Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 104,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-18T23:07:09.051Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 104,
                "column": 16
              }
            },
            {
              "name": "Tess ensures that a note of selectedOptions does eventually equal [ { label: \"First\", value: \"first\" }, { label: \"Third\", value: \"third\" } ]",
              "outcome": "SUCCESS",
              "duration": 12,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-18T23:07:09.748Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 106,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-----value---first-1e15c82be0.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        },
        {
          "outcome": "SUCCESS",
          "run": "1144",
          "timestamp": "2026-08-20T11:08:32.384Z",
          "duration": 834,
          "activities": [
            {
              "name": "Tess selects [ 'First', 'Third' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 670,
              "children": [
                {
                  "name": "Tess iterates over [ 'First', 'Third' ]",
                  "outcome": "SUCCESS",
                  "duration": 660,
                  "children": [
                    {
                      "name": "Tess selects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 389,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 200,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 189,
                              "children": [
                                {
                                  "name": "Tess clicks on input field",
                                  "outcome": "SUCCESS",
                                  "duration": 59,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-20T11:08:34.493Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 110,
                                    "column": 27
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-input-field-5a32e9ada1.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                },
                                {
                                  "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                                  "outcome": "SUCCESS",
                                  "duration": 25,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-20T11:08:34.593Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 92,
                                    "column": 26
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-waits-until-page-element-locat-bfc16cca9d.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                }
                              ],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:08:34.470Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:08:34.469Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 90,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:34.680Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-the-first-of-page-el-f3bb44e501.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 6,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:34.810Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-the-text-of-page--db7313f6f2.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:08:34.468Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    },
                    {
                      "name": "Tess selects 'Third' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 203,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 19,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 8,
                              "children": [],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:08:34.893Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:08:34.892Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 80,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:34.922Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-the-first-of-page-el-054da8985f.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 9,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:35.044Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-the-text-of-page--1e15c82be0.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:08:34.891Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:08:34.444Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 104,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:08:34.444Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 104,
                "column": 16
              }
            },
            {
              "name": "Tess ensures that a note of selectedOptions does eventually equal [ { label: \"First\", value: \"first\" }, { label: \"Third\", value: \"third\" } ]",
              "outcome": "SUCCESS",
              "duration": 11,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T11:08:35.125Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 106,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-----value---first-1e15c82be0.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        },
        {
          "outcome": "SUCCESS",
          "run": "1146",
          "timestamp": "2026-08-20T11:10:24.429Z",
          "duration": 839,
          "activities": [
            {
              "name": "Tess selects [ 'First', 'Third' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 675,
              "children": [
                {
                  "name": "Tess iterates over [ 'First', 'Third' ]",
                  "outcome": "SUCCESS",
                  "duration": 664,
                  "children": [
                    {
                      "name": "Tess selects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 388,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 201,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 188,
                              "children": [
                                {
                                  "name": "Tess clicks on input field",
                                  "outcome": "SUCCESS",
                                  "duration": 55,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-20T11:10:26.603Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 110,
                                    "column": 27
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-input-field-5a32e9ada1.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                },
                                {
                                  "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                                  "outcome": "SUCCESS",
                                  "duration": 26,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-20T11:10:26.701Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 92,
                                    "column": 26
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-waits-until-page-element-locat-bfc16cca9d.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                }
                              ],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:10:26.579Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:26.578Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 86,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:26.790Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-the-first-of-page-el-f3bb44e501.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 7,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:26.917Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-the-text-of-page--db7313f6f2.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:26.578Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    },
                    {
                      "name": "Tess selects 'Third' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 205,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 20,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 8,
                              "children": [],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:10:27.003Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:27.002Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 92,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:27.033Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-the-first-of-page-el-e660a11a20.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 10,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:27.165Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-the-text-of-page--1e15c82be0.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:27.001Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:26.553Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 104,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:10:26.552Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 104,
                "column": 16
              }
            },
            {
              "name": "Tess ensures that a note of selectedOptions does eventually equal [ { label: \"First\", value: \"first\" }, { label: \"Third\", value: \"third\" } ]",
              "outcome": "SUCCESS",
              "duration": 11,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T11:10:27.238Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 106,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-----value---first-1e15c82be0.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        }
      ],
      "cast": [
        {
          "name": "Tess",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://localhost:3100\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        }
      ]
    },
    {
      "name": "triggers onChange with selected options",
      "category": "Dropdown",
      "outcome": "SUCCESS",
      "duration": 878,
      "startedAt": "2026-08-20T11:10:34.279Z",
      "source": {
        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
        "line": 81
      },
      "tags": [
        {
          "type": "theme",
          "name": "Components"
        },
        {
          "type": "capability",
          "name": "Dropdown"
        },
        {
          "type": "feature",
          "name": "Dropdown"
        },
        {
          "type": "project",
          "name": "firefox"
        },
        {
          "type": "platform",
          "name": "Linux 6.17.0-1022-azure"
        },
        {
          "type": "browser",
          "name": "firefox 153.0"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-ct-web-components-template"
        }
      ],
      "activities": [
        {
          "name": "Tess selects [ 'First', 'Third' ] from dropdown",
          "outcome": "SUCCESS",
          "duration": 645,
          "children": [
            {
              "name": "Tess iterates over [ 'First', 'Third' ]",
              "outcome": "SUCCESS",
              "duration": 635,
              "children": [
                {
                  "name": "Tess selects 'First' from dropdown",
                  "outcome": "SUCCESS",
                  "duration": 362,
                  "children": [
                    {
                      "name": "Tess opens the dropdown",
                      "outcome": "SUCCESS",
                      "duration": 195,
                      "children": [
                        {
                          "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                          "outcome": "SUCCESS",
                          "duration": 184,
                          "children": [
                            {
                              "name": "Tess clicks on input field",
                              "outcome": "SUCCESS",
                              "duration": 69,
                              "children": [],
                              "type": "Interaction",
                              "startedAt": "2026-08-20T11:10:34.517Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 110,
                                "column": 27
                              },
                              "artifacts": [
                                {
                                  "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-clicks-on-input-field-b029cbc9ff.png",
                                  "type": "screenshot"
                                }
                              ]
                            },
                            {
                              "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                              "outcome": "SUCCESS",
                              "duration": 34,
                              "children": [],
                              "type": "Interaction",
                              "startedAt": "2026-08-20T11:10:34.607Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              },
                              "artifacts": [
                                {
                                  "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-waits-until-page-element-located-by-dee-da551ad289.png",
                                  "type": "screenshot"
                                }
                              ]
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:34.478Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:34.477Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 92,
                        "column": 26
                      }
                    },
                    {
                      "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"First\"",
                      "outcome": "SUCCESS",
                      "duration": 105,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:34.683Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 93,
                        "column": 23
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-clicks-on-the-first-of-page-elements-lo-7b770aca16.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"First\"",
                      "outcome": "SUCCESS",
                      "duration": 9,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:34.809Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                        "line": 60,
                        "column": 13
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-the-text-of-page-elements--6e842f7565.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:34.476Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                    "line": 72,
                    "column": 50
                  }
                },
                {
                  "name": "Tess selects 'Third' from dropdown",
                  "outcome": "SUCCESS",
                  "duration": 201,
                  "children": [
                    {
                      "name": "Tess opens the dropdown",
                      "outcome": "SUCCESS",
                      "duration": 21,
                      "children": [
                        {
                          "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                          "outcome": "SUCCESS",
                          "duration": 10,
                          "children": [],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:34.875Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:34.874Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 92,
                        "column": 26
                      }
                    },
                    {
                      "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Third\"",
                      "outcome": "SUCCESS",
                      "duration": 111,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:34.907Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 93,
                        "column": 23
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-clicks-on-the-first-of-page-elements-lo-321b4dc672.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Third\"",
                      "outcome": "SUCCESS",
                      "duration": 13,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:35.040Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                        "line": 60,
                        "column": 13
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-the-text-of-page-elements--d36b7173f6.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:34.873Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                    "line": 72,
                    "column": 50
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:10:34.450Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 104,
                "column": 16
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T11:10:34.450Z",
          "location": {
            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
            "line": 104,
            "column": 16
          }
        },
        {
          "name": "Tess ensures that a note of selectedOptions does eventually equal [ { label: \"First\", value: \"first\" }, { label: \"Third\", value: \"third\" } ]",
          "outcome": "SUCCESS",
          "duration": 11,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T11:10:35.106Z",
          "location": {
            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
            "line": 106,
            "column": 20
          },
          "artifacts": [
            {
              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-----value---first---label--f3d4310ad9.png",
              "type": "screenshot"
            }
          ]
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "1140",
          "timestamp": "2026-08-18T23:07:06.992Z",
          "duration": 867,
          "activities": [
            {
              "name": "Tess selects [ 'First', 'Third' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 643,
              "children": [
                {
                  "name": "Tess iterates over [ 'First', 'Third' ]",
                  "outcome": "SUCCESS",
                  "duration": 633,
                  "children": [
                    {
                      "name": "Tess selects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 362,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 195,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 184,
                              "children": [
                                {
                                  "name": "Tess clicks on input field",
                                  "outcome": "SUCCESS",
                                  "duration": 70,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-18T23:07:17.016Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 110,
                                    "column": 27
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-firefox-153-0-tess-clicks-on-input-field-b029cbc9ff.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                },
                                {
                                  "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                                  "outcome": "SUCCESS",
                                  "duration": 33,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-18T23:07:17.107Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 92,
                                    "column": 26
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-firefox-153-0-tess-waits-until-page-element-located-by-dee-e2143a8ceb.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                }
                              ],
                              "type": "Task",
                              "startedAt": "2026-08-18T23:07:16.977Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-18T23:07:16.976Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 105,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:17.183Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-firefox-153-0-tess-clicks-on-the-first-of-page-elements-lo-0b619be9a0.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 9,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:17.309Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-firefox-153-0-tess-ensures-that-the-text-of-page-elements--86af54a3c0.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-18T23:07:16.976Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    },
                    {
                      "name": "Tess selects 'Third' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 202,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 21,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 10,
                              "children": [],
                              "type": "Task",
                              "startedAt": "2026-08-18T23:07:17.374Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-18T23:07:17.373Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 113,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:17.406Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-firefox-153-0-tess-clicks-on-the-first-of-page-elements-lo-0fcd4dc2dc.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 13,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:17.541Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-firefox-153-0-tess-ensures-that-the-text-of-page-elements--aea179b52f.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-18T23:07:17.372Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-18T23:07:16.952Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 104,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-18T23:07:16.952Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 104,
                "column": 16
              }
            },
            {
              "name": "Tess ensures that a note of selectedOptions does eventually equal [ { label: \"First\", value: \"first\" }, { label: \"Third\", value: \"third\" } ]",
              "outcome": "SUCCESS",
              "duration": 11,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-18T23:07:17.606Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 106,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-firefox-153-0-tess-ensures-that-----value---first---label--f3d4310ad9.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        },
        {
          "outcome": "SUCCESS",
          "run": "1144",
          "timestamp": "2026-08-20T11:08:32.384Z",
          "duration": 885,
          "activities": [
            {
              "name": "Tess selects [ 'First', 'Third' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 648,
              "children": [
                {
                  "name": "Tess iterates over [ 'First', 'Third' ]",
                  "outcome": "SUCCESS",
                  "duration": 636,
                  "children": [
                    {
                      "name": "Tess selects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 365,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 195,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 180,
                              "children": [
                                {
                                  "name": "Tess clicks on input field",
                                  "outcome": "SUCCESS",
                                  "duration": 80,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-20T11:08:42.153Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 110,
                                    "column": 27
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-clicks-on-input-field-b029cbc9ff.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                },
                                {
                                  "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                                  "outcome": "SUCCESS",
                                  "duration": 29,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-20T11:08:42.254Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 92,
                                    "column": 26
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-waits-until-page-element-located-by-dee-d6adc75087.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                }
                              ],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:08:42.124Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:08:42.119Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 107,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:42.325Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-clicks-on-the-first-of-page-elements-lo-1a6e19b578.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 8,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:42.454Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-the-text-of-page-elements--8b429870bb.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:08:42.118Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    },
                    {
                      "name": "Tess selects 'Third' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 193,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 16,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 5,
                              "children": [],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:08:42.525Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:08:42.524Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 111,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:42.551Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-clicks-on-the-first-of-page-elements-lo-eec1897955.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 13,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:42.683Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-the-text-of-page-elements--67f2362000.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:08:42.524Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:08:42.091Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 104,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:08:42.090Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 104,
                "column": 16
              }
            },
            {
              "name": "Tess ensures that a note of selectedOptions does eventually equal [ { label: \"First\", value: \"first\" }, { label: \"Third\", value: \"third\" } ]",
              "outcome": "SUCCESS",
              "duration": 11,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T11:08:42.749Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 106,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-----value---first---label--f3d4310ad9.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        },
        {
          "outcome": "SUCCESS",
          "run": "1146",
          "timestamp": "2026-08-20T11:10:24.429Z",
          "duration": 878,
          "activities": [
            {
              "name": "Tess selects [ 'First', 'Third' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 645,
              "children": [
                {
                  "name": "Tess iterates over [ 'First', 'Third' ]",
                  "outcome": "SUCCESS",
                  "duration": 635,
                  "children": [
                    {
                      "name": "Tess selects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 362,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 195,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 184,
                              "children": [
                                {
                                  "name": "Tess clicks on input field",
                                  "outcome": "SUCCESS",
                                  "duration": 69,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-20T11:10:34.517Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 110,
                                    "column": 27
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-clicks-on-input-field-b029cbc9ff.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                },
                                {
                                  "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                                  "outcome": "SUCCESS",
                                  "duration": 34,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-20T11:10:34.607Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 92,
                                    "column": 26
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-waits-until-page-element-located-by-dee-da551ad289.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                }
                              ],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:10:34.478Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:34.477Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 105,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:34.683Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-clicks-on-the-first-of-page-elements-lo-7b770aca16.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 9,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:34.809Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-the-text-of-page-elements--6e842f7565.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:34.476Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    },
                    {
                      "name": "Tess selects 'Third' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 201,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 21,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 10,
                              "children": [],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:10:34.875Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:34.874Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 111,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:34.907Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-clicks-on-the-first-of-page-elements-lo-321b4dc672.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 13,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:35.040Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-the-text-of-page-elements--d36b7173f6.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:34.873Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:34.450Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 104,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:10:34.450Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 104,
                "column": 16
              }
            },
            {
              "name": "Tess ensures that a note of selectedOptions does eventually equal [ { label: \"First\", value: \"first\" }, { label: \"Third\", value: \"third\" } ]",
              "outcome": "SUCCESS",
              "duration": 11,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T11:10:35.106Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 106,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-----value---first---label--f3d4310ad9.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        }
      ],
      "cast": [
        {
          "name": "Tess",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://localhost:3100\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        }
      ]
    },
    {
      "name": "triggers onChange with selected options",
      "category": "Dropdown",
      "outcome": "SUCCESS",
      "duration": 1837,
      "startedAt": "2026-08-20T11:10:43.087Z",
      "source": {
        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
        "line": 81
      },
      "tags": [
        {
          "type": "theme",
          "name": "Components"
        },
        {
          "type": "capability",
          "name": "Dropdown"
        },
        {
          "type": "feature",
          "name": "Dropdown"
        },
        {
          "type": "project",
          "name": "webkit"
        },
        {
          "type": "platform",
          "name": "Linux 6.17.0-1022-azure"
        },
        {
          "type": "browser",
          "name": "webkit 26.5"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-ct-web-components-template"
        }
      ],
      "activities": [
        {
          "name": "Tess selects [ 'First', 'Third' ] from dropdown",
          "outcome": "SUCCESS",
          "duration": 1532,
          "children": [
            {
              "name": "Tess iterates over [ 'First', 'Third' ]",
              "outcome": "SUCCESS",
              "duration": 1521,
              "children": [
                {
                  "name": "Tess selects 'First' from dropdown",
                  "outcome": "SUCCESS",
                  "duration": 996,
                  "children": [
                    {
                      "name": "Tess opens the dropdown",
                      "outcome": "SUCCESS",
                      "duration": 538,
                      "children": [
                        {
                          "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                          "outcome": "SUCCESS",
                          "duration": 527,
                          "children": [
                            {
                              "name": "Tess clicks on input field",
                              "outcome": "SUCCESS",
                              "duration": 75,
                              "children": [],
                              "type": "Interaction",
                              "startedAt": "2026-08-20T11:10:43.253Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 110,
                                "column": 27
                              },
                              "artifacts": [
                                {
                                  "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-clicks-on-input-field-bea7f7b144.png",
                                  "type": "screenshot"
                                }
                              ]
                            },
                            {
                              "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                              "outcome": "SUCCESS",
                              "duration": 44,
                              "children": [],
                              "type": "Interaction",
                              "startedAt": "2026-08-20T11:10:43.492Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              },
                              "artifacts": [
                                {
                                  "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-waits-until-page-element-located-by-deep--de6e0b28d8.png",
                                  "type": "screenshot"
                                }
                              ]
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:43.225Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:43.224Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 92,
                        "column": 26
                      }
                    },
                    {
                      "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"First\"",
                      "outcome": "SUCCESS",
                      "duration": 111,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:43.773Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 93,
                        "column": 23
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-clicks-on-the-first-of-page-elements-loca-efccbf4739.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"First\"",
                      "outcome": "SUCCESS",
                      "duration": 9,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:44.048Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                        "line": 60,
                        "column": 13
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-the-text-of-page-elements-lo-efccbf4739.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:43.223Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                    "line": 72,
                    "column": 50
                  }
                },
                {
                  "name": "Tess selects 'Third' from dropdown",
                  "outcome": "SUCCESS",
                  "duration": 442,
                  "children": [
                    {
                      "name": "Tess opens the dropdown",
                      "outcome": "SUCCESS",
                      "duration": 16,
                      "children": [
                        {
                          "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                          "outcome": "SUCCESS",
                          "duration": 4,
                          "children": [],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:44.260Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:44.259Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 92,
                        "column": 26
                      }
                    },
                    {
                      "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Third\"",
                      "outcome": "SUCCESS",
                      "duration": 79,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:44.286Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 93,
                        "column": 23
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-clicks-on-the-first-of-page-elements-loca-7c194d682c.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Third\"",
                      "outcome": "SUCCESS",
                      "duration": 12,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:44.528Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                        "line": 60,
                        "column": 13
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-the-text-of-page-elements-lo-7c194d682c.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:44.259Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                    "line": 72,
                    "column": 50
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:10:43.191Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 104,
                "column": 16
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T11:10:43.190Z",
          "location": {
            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
            "line": 104,
            "column": 16
          }
        },
        {
          "name": "Tess ensures that a note of selectedOptions does eventually equal [ { label: \"First\", value: \"first\" }, { label: \"Third\", value: \"third\" } ]",
          "outcome": "SUCCESS",
          "duration": 11,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T11:10:44.733Z",
          "location": {
            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
            "line": 106,
            "column": 20
          },
          "artifacts": [
            {
              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-----value---first---label----7c194d682c.png",
              "type": "screenshot"
            }
          ]
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "1140",
          "timestamp": "2026-08-18T23:07:06.992Z",
          "duration": 1804,
          "activities": [
            {
              "name": "Tess selects [ 'First', 'Third' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 1497,
              "children": [
                {
                  "name": "Tess iterates over [ 'First', 'Third' ]",
                  "outcome": "SUCCESS",
                  "duration": 1486,
                  "children": [
                    {
                      "name": "Tess selects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 947,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 507,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 495,
                              "children": [
                                {
                                  "name": "Tess clicks on input field",
                                  "outcome": "SUCCESS",
                                  "duration": 65,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-18T23:07:25.615Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 110,
                                    "column": 27
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-webkit-26-5-tess-clicks-on-input-field-bea7f7b144.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                },
                                {
                                  "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                                  "outcome": "SUCCESS",
                                  "duration": 34,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-18T23:07:25.845Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 92,
                                    "column": 26
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-webkit-26-5-tess-waits-until-page-element-located-by-deep--95c3a24056.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                }
                              ],
                              "type": "Task",
                              "startedAt": "2026-08-18T23:07:25.592Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-18T23:07:25.592Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 94,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:26.110Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-webkit-26-5-tess-clicks-on-the-first-of-page-elements-loca-efccbf4739.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 8,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:26.368Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-webkit-26-5-tess-ensures-that-the-text-of-page-elements-lo-efccbf4739.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-18T23:07:25.591Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    },
                    {
                      "name": "Tess selects 'Third' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 451,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 15,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 4,
                              "children": [],
                              "type": "Task",
                              "startedAt": "2026-08-18T23:07:26.584Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-18T23:07:26.583Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 91,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:26.610Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-webkit-26-5-tess-clicks-on-the-first-of-page-elements-loca-7c194d682c.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 10,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:26.863Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-webkit-26-5-tess-ensures-that-the-text-of-page-elements-lo-7c194d682c.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-18T23:07:26.583Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-18T23:07:25.558Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 104,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-18T23:07:25.558Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 104,
                "column": 16
              }
            },
            {
              "name": "Tess ensures that a note of selectedOptions does eventually equal [ { label: \"First\", value: \"first\" }, { label: \"Third\", value: \"third\" } ]",
              "outcome": "SUCCESS",
              "duration": 11,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-18T23:07:27.066Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 106,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-webkit-26-5-tess-ensures-that-----value---first---label----7c194d682c.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        },
        {
          "outcome": "SUCCESS",
          "run": "1144",
          "timestamp": "2026-08-20T11:08:32.384Z",
          "duration": 1814,
          "activities": [
            {
              "name": "Tess selects [ 'First', 'Third' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 1515,
              "children": [
                {
                  "name": "Tess iterates over [ 'First', 'Third' ]",
                  "outcome": "SUCCESS",
                  "duration": 1504,
                  "children": [
                    {
                      "name": "Tess selects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 960,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 510,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 498,
                              "children": [
                                {
                                  "name": "Tess clicks on input field",
                                  "outcome": "SUCCESS",
                                  "duration": 72,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-20T11:08:50.632Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 110,
                                    "column": 27
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-clicks-on-input-field-bea7f7b144.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                },
                                {
                                  "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                                  "outcome": "SUCCESS",
                                  "duration": 44,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-20T11:08:50.867Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 92,
                                    "column": 26
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-waits-until-page-element-located-by-deep--d4ab0ec203.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                }
                              ],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:08:50.610Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:08:50.609Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 106,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:51.130Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-clicks-on-the-first-of-page-elements-loca-efccbf4739.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 6,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:51.400Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-the-text-of-page-elements-lo-efccbf4739.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:08:50.609Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    },
                    {
                      "name": "Tess selects 'Third' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 458,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 15,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 4,
                              "children": [],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:08:51.614Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:08:51.613Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 88,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:51.639Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-clicks-on-the-first-of-page-elements-loca-7c194d682c.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 10,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:51.899Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-the-text-of-page-elements-lo-7c194d682c.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:08:51.613Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:08:50.577Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 104,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:08:50.576Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 104,
                "column": 16
              }
            },
            {
              "name": "Tess ensures that a note of selectedOptions does eventually equal [ { label: \"First\", value: \"first\" }, { label: \"Third\", value: \"third\" } ]",
              "outcome": "SUCCESS",
              "duration": 12,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T11:08:52.102Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 106,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-----value---first---label----7c194d682c.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        },
        {
          "outcome": "SUCCESS",
          "run": "1146",
          "timestamp": "2026-08-20T11:10:24.429Z",
          "duration": 1837,
          "activities": [
            {
              "name": "Tess selects [ 'First', 'Third' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 1532,
              "children": [
                {
                  "name": "Tess iterates over [ 'First', 'Third' ]",
                  "outcome": "SUCCESS",
                  "duration": 1521,
                  "children": [
                    {
                      "name": "Tess selects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 996,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 538,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 527,
                              "children": [
                                {
                                  "name": "Tess clicks on input field",
                                  "outcome": "SUCCESS",
                                  "duration": 75,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-20T11:10:43.253Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 110,
                                    "column": 27
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-clicks-on-input-field-bea7f7b144.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                },
                                {
                                  "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                                  "outcome": "SUCCESS",
                                  "duration": 44,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-20T11:10:43.492Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 92,
                                    "column": 26
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-waits-until-page-element-located-by-deep--de6e0b28d8.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                }
                              ],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:10:43.225Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:43.224Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 111,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:43.773Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-clicks-on-the-first-of-page-elements-loca-efccbf4739.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 9,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:44.048Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-the-text-of-page-elements-lo-efccbf4739.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:43.223Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    },
                    {
                      "name": "Tess selects 'Third' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 442,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 16,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 4,
                              "children": [],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:10:44.260Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:44.259Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 79,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:44.286Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-clicks-on-the-first-of-page-elements-loca-7c194d682c.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 12,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:44.528Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-the-text-of-page-elements-lo-7c194d682c.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:44.259Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:43.191Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 104,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:10:43.190Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 104,
                "column": 16
              }
            },
            {
              "name": "Tess ensures that a note of selectedOptions does eventually equal [ { label: \"First\", value: \"first\" }, { label: \"Third\", value: \"third\" } ]",
              "outcome": "SUCCESS",
              "duration": 11,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T11:10:44.733Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 106,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-----value---first---label----7c194d682c.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        }
      ],
      "cast": [
        {
          "name": "Tess",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://localhost:3100\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        }
      ]
    },
    {
      "name": "allows for selected options to be deselected",
      "category": "Dropdown",
      "outcome": "SUCCESS",
      "duration": 1329,
      "startedAt": "2026-08-20T11:10:27.327Z",
      "source": {
        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
        "line": 113
      },
      "tags": [
        {
          "type": "theme",
          "name": "Components"
        },
        {
          "type": "capability",
          "name": "Dropdown"
        },
        {
          "type": "feature",
          "name": "Dropdown"
        },
        {
          "type": "project",
          "name": "chromium"
        },
        {
          "type": "platform",
          "name": "Linux 6.17.0-1022-azure"
        },
        {
          "type": "browser",
          "name": "chromium 151.0.7922.34"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-ct-web-components-template"
        }
      ],
      "activities": [
        {
          "name": "Tess selects [ 'First', 'Third', 'Second' ] from dropdown",
          "outcome": "SUCCESS",
          "duration": 910,
          "children": [
            {
              "name": "Tess iterates over [ 'First', 'Third', 'Second' ]",
              "outcome": "SUCCESS",
              "duration": 898,
              "children": [
                {
                  "name": "Tess selects 'First' from dropdown",
                  "outcome": "SUCCESS",
                  "duration": 387,
                  "children": [
                    {
                      "name": "Tess opens the dropdown",
                      "outcome": "SUCCESS",
                      "duration": 197,
                      "children": [
                        {
                          "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                          "outcome": "SUCCESS",
                          "duration": 186,
                          "children": [
                            {
                              "name": "Tess clicks on input field",
                              "outcome": "SUCCESS",
                              "duration": 57,
                              "children": [],
                              "type": "Interaction",
                              "startedAt": "2026-08-20T11:10:27.517Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 110,
                                "column": 27
                              },
                              "artifacts": [
                                {
                                  "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-input-field-5a32e9ada1.png",
                                  "type": "screenshot"
                                }
                              ]
                            },
                            {
                              "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                              "outcome": "SUCCESS",
                              "duration": 25,
                              "children": [],
                              "type": "Interaction",
                              "startedAt": "2026-08-20T11:10:27.617Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              },
                              "artifacts": [
                                {
                                  "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-waits-until-page-element-locat-bfc16cca9d.png",
                                  "type": "screenshot"
                                }
                              ]
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:27.497Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:27.496Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 92,
                        "column": 26
                      }
                    },
                    {
                      "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"First\"",
                      "outcome": "SUCCESS",
                      "duration": 87,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:27.704Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 93,
                        "column": 23
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-the-first-of-page-el-f3bb44e501.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"First\"",
                      "outcome": "SUCCESS",
                      "duration": 7,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:27.833Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                        "line": 60,
                        "column": 13
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-the-text-of-page--db7313f6f2.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:27.493Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                    "line": 72,
                    "column": 50
                  }
                },
                {
                  "name": "Tess selects 'Third' from dropdown",
                  "outcome": "SUCCESS",
                  "duration": 217,
                  "children": [
                    {
                      "name": "Tess opens the dropdown",
                      "outcome": "SUCCESS",
                      "duration": 20,
                      "children": [
                        {
                          "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                          "outcome": "SUCCESS",
                          "duration": 9,
                          "children": [],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:27.917Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:27.916Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 92,
                        "column": 26
                      }
                    },
                    {
                      "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Third\"",
                      "outcome": "SUCCESS",
                      "duration": 93,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:27.947Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 93,
                        "column": 23
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-the-first-of-page-el-e660a11a20.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Third\"",
                      "outcome": "SUCCESS",
                      "duration": 9,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:28.083Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                        "line": 60,
                        "column": 13
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-the-text-of-page--1e15c82be0.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:27.915Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                    "line": 72,
                    "column": 50
                  }
                },
                {
                  "name": "Tess selects 'Second' from dropdown",
                  "outcome": "SUCCESS",
                  "duration": 192,
                  "children": [
                    {
                      "name": "Tess opens the dropdown",
                      "outcome": "SUCCESS",
                      "duration": 17,
                      "children": [
                        {
                          "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                          "outcome": "SUCCESS",
                          "duration": 6,
                          "children": [],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:28.166Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:28.166Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 92,
                        "column": 26
                      }
                    },
                    {
                      "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Second\"",
                      "outcome": "SUCCESS",
                      "duration": 80,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:28.194Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 93,
                        "column": 23
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-the-first-of-page-el-abf8b9e0e4.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Second\"",
                      "outcome": "SUCCESS",
                      "duration": 12,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:28.315Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                        "line": 60,
                        "column": 13
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-the-text-of-page--abf8b9e0e4.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:28.165Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                    "line": 72,
                    "column": 50
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:10:27.469Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 126,
                "column": 16
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T11:10:27.468Z",
          "location": {
            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
            "line": 126,
            "column": 16
          }
        },
        {
          "name": "Tess deselects [ 'First' ] from dropdown",
          "outcome": "SUCCESS",
          "duration": 193,
          "children": [
            {
              "name": "Tess iterates over [ 'First' ]",
              "outcome": "SUCCESS",
              "duration": 182,
              "children": [
                {
                  "name": "Tess deselects 'First' from dropdown",
                  "outcome": "SUCCESS",
                  "duration": 156,
                  "children": [
                    {
                      "name": "Tess clicks on deselect button of the first of page elements located by deep css ('.dropdown-selected-option') of input field where Text does include \"First\"",
                      "outcome": "SUCCESS",
                      "duration": 69,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:28.405Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 101,
                        "column": 23
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-deselect-button-of-t-00d27d6636.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does not contain \"First\"",
                      "outcome": "SUCCESS",
                      "duration": 13,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:28.517Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                        "line": 60,
                        "column": 13
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-the-text-of-page--00d27d6636.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:28.405Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                    "line": 83,
                    "column": 52
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:10:28.389Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 130,
                "column": 16
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T11:10:28.388Z",
          "location": {
            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
            "line": 130,
            "column": 16
          }
        },
        {
          "name": "Tess ensures that selected options does equal [ \"Third\", \"Second\" ]",
          "outcome": "SUCCESS",
          "duration": 10,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T11:10:28.593Z",
          "location": {
            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
            "line": 132,
            "column": 20
          },
          "artifacts": [
            {
              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-selected-options--00d27d6636.png",
              "type": "screenshot"
            }
          ]
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "1140",
          "timestamp": "2026-08-18T23:07:06.992Z",
          "duration": 1280,
          "activities": [
            {
              "name": "Tess selects [ 'First', 'Third', 'Second' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 910,
              "children": [
                {
                  "name": "Tess iterates over [ 'First', 'Third', 'Second' ]",
                  "outcome": "SUCCESS",
                  "duration": 899,
                  "children": [
                    {
                      "name": "Tess selects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 399,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 186,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 176,
                              "children": [
                                {
                                  "name": "Tess clicks on input field",
                                  "outcome": "SUCCESS",
                                  "duration": 53,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-18T23:07:09.977Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 110,
                                    "column": 27
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-input-field-5a32e9ada1.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                },
                                {
                                  "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                                  "outcome": "SUCCESS",
                                  "duration": 27,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-18T23:07:10.073Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 92,
                                    "column": 26
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-chromium-151-0-7922-34-tess-waits-until-page-element-locat-bfc16cca9d.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                }
                              ],
                              "type": "Task",
                              "startedAt": "2026-08-18T23:07:09.955Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-18T23:07:09.955Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 96,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:10.153Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-the-first-of-page-el-cd201c4154.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 7,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:10.302Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-the-text-of-page--2bb8c765ea.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-18T23:07:09.951Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    },
                    {
                      "name": "Tess selects 'Third' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 210,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 21,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 10,
                              "children": [],
                              "type": "Task",
                              "startedAt": "2026-08-18T23:07:10.388Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-18T23:07:10.387Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 96,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:10.418Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-the-first-of-page-el-9e9ccc74e7.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 10,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:10.556Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-the-text-of-page--1e15c82be0.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-18T23:07:10.386Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    },
                    {
                      "name": "Tess selects 'Second' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 187,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 18,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 6,
                              "children": [],
                              "type": "Task",
                              "startedAt": "2026-08-18T23:07:10.631Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-18T23:07:10.630Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 71,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:10.659Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-the-first-of-page-el-abf8b9e0e4.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 13,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:10.772Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-the-text-of-page--abf8b9e0e4.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-18T23:07:10.630Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-18T23:07:09.928Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 126,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-18T23:07:09.927Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 126,
                "column": 16
              }
            },
            {
              "name": "Tess deselects [ 'First' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 188,
              "children": [
                {
                  "name": "Tess iterates over [ 'First' ]",
                  "outcome": "SUCCESS",
                  "duration": 176,
                  "children": [
                    {
                      "name": "Tess deselects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 150,
                      "children": [
                        {
                          "name": "Tess clicks on deselect button of the first of page elements located by deep css ('.dropdown-selected-option') of input field where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 64,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:10.866Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 101,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-deselect-button-of-t-00d27d6636.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does not contain \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 12,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:10.972Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-the-text-of-page--00d27d6636.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-18T23:07:10.865Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 83,
                        "column": 52
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-18T23:07:10.849Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 130,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-18T23:07:10.848Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 130,
                "column": 16
              }
            },
            {
              "name": "Tess ensures that selected options does equal [ \"Third\", \"Second\" ]",
              "outcome": "SUCCESS",
              "duration": 11,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-18T23:07:11.047Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 132,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-selected-options--00d27d6636.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        },
        {
          "outcome": "SUCCESS",
          "run": "1144",
          "timestamp": "2026-08-20T11:08:32.384Z",
          "duration": 1283,
          "activities": [
            {
              "name": "Tess selects [ 'First', 'Third', 'Second' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 890,
              "children": [
                {
                  "name": "Tess iterates over [ 'First', 'Third', 'Second' ]",
                  "outcome": "SUCCESS",
                  "duration": 879,
                  "children": [
                    {
                      "name": "Tess selects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 392,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 199,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 188,
                              "children": [
                                {
                                  "name": "Tess clicks on input field",
                                  "outcome": "SUCCESS",
                                  "duration": 65,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-20T11:08:35.387Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 110,
                                    "column": 27
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-input-field-5a32e9ada1.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                },
                                {
                                  "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                                  "outcome": "SUCCESS",
                                  "duration": 24,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-20T11:08:35.492Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 92,
                                    "column": 26
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-waits-until-page-element-locat-bfc16cca9d.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                }
                              ],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:08:35.368Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:08:35.367Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 91,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:35.577Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-the-first-of-page-el-f3bb44e501.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 7,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:35.709Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-the-text-of-page--db7313f6f2.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:08:35.365Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    },
                    {
                      "name": "Tess selects 'Third' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 196,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 18,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 7,
                              "children": [],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:08:35.798Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:08:35.797Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 75,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:35.826Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-the-first-of-page-el-054da8985f.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 9,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:35.942Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-the-text-of-page--1e6e1e48f4.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:08:35.796Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    },
                    {
                      "name": "Tess selects 'Second' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 186,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 15,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 4,
                              "children": [],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:08:36.025Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:08:36.024Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 68,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:36.050Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-the-first-of-page-el-abf8b9e0e4.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 11,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:36.158Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-the-text-of-page--abf8b9e0e4.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:08:36.024Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:08:35.341Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 126,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:08:35.340Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 126,
                "column": 16
              }
            },
            {
              "name": "Tess deselects [ 'First' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 180,
              "children": [
                {
                  "name": "Tess iterates over [ 'First' ]",
                  "outcome": "SUCCESS",
                  "duration": 170,
                  "children": [
                    {
                      "name": "Tess deselects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 144,
                      "children": [
                        {
                          "name": "Tess clicks on deselect button of the first of page elements located by deep css ('.dropdown-selected-option') of input field where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 61,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:36.257Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 101,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-deselect-button-of-t-00d27d6636.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does not contain \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 11,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:36.359Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-the-text-of-page--00d27d6636.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:08:36.257Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 83,
                        "column": 52
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:08:36.241Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 130,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:08:36.241Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 130,
                "column": 16
              }
            },
            {
              "name": "Tess ensures that selected options does equal [ \"Third\", \"Second\" ]",
              "outcome": "SUCCESS",
              "duration": 10,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T11:08:36.433Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 132,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-selected-options--00d27d6636.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        },
        {
          "outcome": "SUCCESS",
          "run": "1146",
          "timestamp": "2026-08-20T11:10:24.429Z",
          "duration": 1329,
          "activities": [
            {
              "name": "Tess selects [ 'First', 'Third', 'Second' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 910,
              "children": [
                {
                  "name": "Tess iterates over [ 'First', 'Third', 'Second' ]",
                  "outcome": "SUCCESS",
                  "duration": 898,
                  "children": [
                    {
                      "name": "Tess selects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 387,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 197,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 186,
                              "children": [
                                {
                                  "name": "Tess clicks on input field",
                                  "outcome": "SUCCESS",
                                  "duration": 57,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-20T11:10:27.517Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 110,
                                    "column": 27
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-input-field-5a32e9ada1.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                },
                                {
                                  "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                                  "outcome": "SUCCESS",
                                  "duration": 25,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-20T11:10:27.617Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 92,
                                    "column": 26
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-waits-until-page-element-locat-bfc16cca9d.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                }
                              ],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:10:27.497Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:27.496Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 87,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:27.704Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-the-first-of-page-el-f3bb44e501.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 7,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:27.833Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-the-text-of-page--db7313f6f2.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:27.493Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    },
                    {
                      "name": "Tess selects 'Third' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 217,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 20,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 9,
                              "children": [],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:10:27.917Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:27.916Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 93,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:27.947Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-the-first-of-page-el-e660a11a20.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 9,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:28.083Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-the-text-of-page--1e15c82be0.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:27.915Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    },
                    {
                      "name": "Tess selects 'Second' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 192,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 17,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 6,
                              "children": [],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:10:28.166Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:28.166Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 80,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:28.194Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-the-first-of-page-el-abf8b9e0e4.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 12,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:28.315Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-the-text-of-page--abf8b9e0e4.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:28.165Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:27.469Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 126,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:10:27.468Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 126,
                "column": 16
              }
            },
            {
              "name": "Tess deselects [ 'First' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 193,
              "children": [
                {
                  "name": "Tess iterates over [ 'First' ]",
                  "outcome": "SUCCESS",
                  "duration": 182,
                  "children": [
                    {
                      "name": "Tess deselects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 156,
                      "children": [
                        {
                          "name": "Tess clicks on deselect button of the first of page elements located by deep css ('.dropdown-selected-option') of input field where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 69,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:28.405Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 101,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-deselect-button-of-t-00d27d6636.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does not contain \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 13,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:28.517Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-the-text-of-page--00d27d6636.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:28.405Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 83,
                        "column": 52
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:28.389Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 130,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:10:28.388Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 130,
                "column": 16
              }
            },
            {
              "name": "Tess ensures that selected options does equal [ \"Third\", \"Second\" ]",
              "outcome": "SUCCESS",
              "duration": 10,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T11:10:28.593Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 132,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-selected-options--00d27d6636.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        }
      ],
      "cast": [
        {
          "name": "Tess",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://localhost:3100\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        }
      ]
    },
    {
      "name": "allows for selected options to be deselected",
      "category": "Dropdown",
      "outcome": "SUCCESS",
      "duration": 1297,
      "startedAt": "2026-08-20T11:10:35.183Z",
      "source": {
        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
        "line": 113
      },
      "tags": [
        {
          "type": "theme",
          "name": "Components"
        },
        {
          "type": "capability",
          "name": "Dropdown"
        },
        {
          "type": "feature",
          "name": "Dropdown"
        },
        {
          "type": "project",
          "name": "firefox"
        },
        {
          "type": "platform",
          "name": "Linux 6.17.0-1022-azure"
        },
        {
          "type": "browser",
          "name": "firefox 153.0"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-ct-web-components-template"
        }
      ],
      "activities": [
        {
          "name": "Tess selects [ 'First', 'Third', 'Second' ] from dropdown",
          "outcome": "SUCCESS",
          "duration": 880,
          "children": [
            {
              "name": "Tess iterates over [ 'First', 'Third', 'Second' ]",
              "outcome": "SUCCESS",
              "duration": 869,
              "children": [
                {
                  "name": "Tess selects 'First' from dropdown",
                  "outcome": "SUCCESS",
                  "duration": 363,
                  "children": [
                    {
                      "name": "Tess opens the dropdown",
                      "outcome": "SUCCESS",
                      "duration": 199,
                      "children": [
                        {
                          "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                          "outcome": "SUCCESS",
                          "duration": 187,
                          "children": [
                            {
                              "name": "Tess clicks on input field",
                              "outcome": "SUCCESS",
                              "duration": 84,
                              "children": [],
                              "type": "Interaction",
                              "startedAt": "2026-08-20T11:10:35.404Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 110,
                                "column": 27
                              },
                              "artifacts": [
                                {
                                  "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-clicks-on-input-field-b029cbc9ff.png",
                                  "type": "screenshot"
                                }
                              ]
                            },
                            {
                              "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                              "outcome": "SUCCESS",
                              "duration": 31,
                              "children": [],
                              "type": "Interaction",
                              "startedAt": "2026-08-20T11:10:35.509Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              },
                              "artifacts": [
                                {
                                  "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-waits-until-page-element-located-by-dee-6d77c8f542.png",
                                  "type": "screenshot"
                                }
                              ]
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:35.374Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:35.373Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 92,
                        "column": 26
                      }
                    },
                    {
                      "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"First\"",
                      "outcome": "SUCCESS",
                      "duration": 103,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:35.583Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 93,
                        "column": 23
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-clicks-on-the-first-of-page-elements-lo-f71405e448.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"First\"",
                      "outcome": "SUCCESS",
                      "duration": 9,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:35.707Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                        "line": 60,
                        "column": 13
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-the-text-of-page-elements--6605a170fc.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:35.373Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                    "line": 72,
                    "column": 50
                  }
                },
                {
                  "name": "Tess selects 'Third' from dropdown",
                  "outcome": "SUCCESS",
                  "duration": 204,
                  "children": [
                    {
                      "name": "Tess opens the dropdown",
                      "outcome": "SUCCESS",
                      "duration": 20,
                      "children": [
                        {
                          "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                          "outcome": "SUCCESS",
                          "duration": 9,
                          "children": [],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:35.773Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:35.772Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 92,
                        "column": 26
                      }
                    },
                    {
                      "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Third\"",
                      "outcome": "SUCCESS",
                      "duration": 115,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:35.804Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 93,
                        "column": 23
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-clicks-on-the-first-of-page-elements-lo-e3ea01a24e.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Third\"",
                      "outcome": "SUCCESS",
                      "duration": 14,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:35.941Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                        "line": 60,
                        "column": 13
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-the-text-of-page-elements--fe71e38b0d.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:35.771Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                    "line": 72,
                    "column": 50
                  }
                },
                {
                  "name": "Tess selects 'Second' from dropdown",
                  "outcome": "SUCCESS",
                  "duration": 193,
                  "children": [
                    {
                      "name": "Tess opens the dropdown",
                      "outcome": "SUCCESS",
                      "duration": 17,
                      "children": [
                        {
                          "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                          "outcome": "SUCCESS",
                          "duration": 6,
                          "children": [],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:36.010Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:36.010Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 92,
                        "column": 26
                      }
                    },
                    {
                      "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Second\"",
                      "outcome": "SUCCESS",
                      "duration": 97,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:36.038Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 93,
                        "column": 23
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-clicks-on-the-first-of-page-elements-lo-4c78de545e.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Second\"",
                      "outcome": "SUCCESS",
                      "duration": 24,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:36.157Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                        "line": 60,
                        "column": 13
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-the-text-of-page-elements--4c78de545e.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:36.009Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                    "line": 72,
                    "column": 50
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:10:35.344Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 126,
                "column": 16
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T11:10:35.343Z",
          "location": {
            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
            "line": 126,
            "column": 16
          }
        },
        {
          "name": "Tess deselects [ 'First' ] from dropdown",
          "outcome": "SUCCESS",
          "duration": 176,
          "children": [
            {
              "name": "Tess iterates over [ 'First' ]",
              "outcome": "SUCCESS",
              "duration": 166,
              "children": [
                {
                  "name": "Tess deselects 'First' from dropdown",
                  "outcome": "SUCCESS",
                  "duration": 140,
                  "children": [
                    {
                      "name": "Tess clicks on deselect button of the first of page elements located by deep css ('.dropdown-selected-option') of input field where Text does include \"First\"",
                      "outcome": "SUCCESS",
                      "duration": 83,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:36.251Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 101,
                        "column": 23
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-clicks-on-deselect-button-of-the-first--3f34c2e04d.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does not contain \"First\"",
                      "outcome": "SUCCESS",
                      "duration": 13,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:36.356Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                        "line": 60,
                        "column": 13
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-the-text-of-page-elements--3f34c2e04d.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:36.250Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                    "line": 83,
                    "column": 52
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:10:36.234Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 130,
                "column": 16
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T11:10:36.234Z",
          "location": {
            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
            "line": 130,
            "column": 16
          }
        },
        {
          "name": "Tess ensures that selected options does equal [ \"Third\", \"Second\" ]",
          "outcome": "SUCCESS",
          "duration": 13,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T11:10:36.421Z",
          "location": {
            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
            "line": 132,
            "column": 20
          },
          "artifacts": [
            {
              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-selected-options-does-equa-3f34c2e04d.png",
              "type": "screenshot"
            }
          ]
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "1140",
          "timestamp": "2026-08-18T23:07:06.992Z",
          "duration": 1261,
          "activities": [
            {
              "name": "Tess selects [ 'First', 'Third', 'Second' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 848,
              "children": [
                {
                  "name": "Tess iterates over [ 'First', 'Third', 'Second' ]",
                  "outcome": "SUCCESS",
                  "duration": 838,
                  "children": [
                    {
                      "name": "Tess selects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 374,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 191,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 180,
                              "children": [
                                {
                                  "name": "Tess clicks on input field",
                                  "outcome": "SUCCESS",
                                  "duration": 79,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-18T23:07:17.891Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 110,
                                    "column": 27
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-firefox-153-0-tess-clicks-on-input-field-b029cbc9ff.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                },
                                {
                                  "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                                  "outcome": "SUCCESS",
                                  "duration": 29,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-18T23:07:17.992Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 92,
                                    "column": 26
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-firefox-153-0-tess-waits-until-page-element-located-by-dee-2d03a55872.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                }
                              ],
                              "type": "Task",
                              "startedAt": "2026-08-18T23:07:17.861Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-18T23:07:17.860Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 123,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:18.062Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-firefox-153-0-tess-clicks-on-the-first-of-page-elements-lo-7d737057e1.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 8,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:18.206Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-firefox-153-0-tess-ensures-that-the-text-of-page-elements--a9522d0691.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-18T23:07:17.860Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    },
                    {
                      "name": "Tess selects 'Third' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 186,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 20,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 9,
                              "children": [],
                              "type": "Task",
                              "startedAt": "2026-08-18T23:07:18.270Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-18T23:07:18.269Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 99,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:18.301Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-firefox-153-0-tess-clicks-on-the-first-of-page-elements-lo-3793815608.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 12,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:18.422Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-firefox-153-0-tess-ensures-that-the-text-of-page-elements--b238a556f7.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-18T23:07:18.268Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    },
                    {
                      "name": "Tess selects 'Second' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 174,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 17,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 5,
                              "children": [],
                              "type": "Task",
                              "startedAt": "2026-08-18T23:07:18.488Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-18T23:07:18.487Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 87,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:18.514Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-firefox-153-0-tess-clicks-on-the-first-of-page-elements-lo-4c78de545e.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 20,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:18.621Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-firefox-153-0-tess-ensures-that-the-text-of-page-elements--4c78de545e.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-18T23:07:18.487Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-18T23:07:17.833Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 126,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-18T23:07:17.833Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 126,
                "column": 16
              }
            },
            {
              "name": "Tess deselects [ 'First' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 184,
              "children": [
                {
                  "name": "Tess iterates over [ 'First' ]",
                  "outcome": "SUCCESS",
                  "duration": 174,
                  "children": [
                    {
                      "name": "Tess deselects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 148,
                      "children": [
                        {
                          "name": "Tess clicks on deselect button of the first of page elements located by deep css ('.dropdown-selected-option') of input field where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 92,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:18.708Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 101,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-firefox-153-0-tess-clicks-on-deselect-button-of-the-first--3f34c2e04d.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does not contain \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 13,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:18.822Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-firefox-153-0-tess-ensures-that-the-text-of-page-elements--3f34c2e04d.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-18T23:07:18.708Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 83,
                        "column": 52
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-18T23:07:18.692Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 130,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-18T23:07:18.692Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 130,
                "column": 16
              }
            },
            {
              "name": "Tess ensures that selected options does equal [ \"Third\", \"Second\" ]",
              "outcome": "SUCCESS",
              "duration": 12,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-18T23:07:18.887Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 132,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-firefox-153-0-tess-ensures-that-selected-options-does-equa-3f34c2e04d.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        },
        {
          "outcome": "SUCCESS",
          "run": "1144",
          "timestamp": "2026-08-20T11:08:32.384Z",
          "duration": 1246,
          "activities": [
            {
              "name": "Tess selects [ 'First', 'Third', 'Second' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 827,
              "children": [
                {
                  "name": "Tess iterates over [ 'First', 'Third', 'Second' ]",
                  "outcome": "SUCCESS",
                  "duration": 816,
                  "children": [
                    {
                      "name": "Tess selects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 359,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 189,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 178,
                              "children": [
                                {
                                  "name": "Tess clicks on input field",
                                  "outcome": "SUCCESS",
                                  "duration": 78,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-20T11:08:43.036Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 110,
                                    "column": 27
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-clicks-on-input-field-b029cbc9ff.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                },
                                {
                                  "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                                  "outcome": "SUCCESS",
                                  "duration": 29,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-20T11:08:43.135Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 92,
                                    "column": 26
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-waits-until-page-element-located-by-dee-2d03a55872.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                }
                              ],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:08:43.007Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:08:43.006Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 108,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:43.206Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-clicks-on-the-first-of-page-elements-lo-c8f008a8f1.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 8,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:43.335Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-the-text-of-page-elements--0ca2194509.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:08:43.005Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    },
                    {
                      "name": "Tess selects 'Third' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 184,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 16,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 6,
                              "children": [],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:08:43.403Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:08:43.403Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 99,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:43.430Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-clicks-on-the-first-of-page-elements-lo-38a8ebeace.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 15,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:43.550Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-the-text-of-page-elements--5c4d6e5653.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:08:43.402Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    },
                    {
                      "name": "Tess selects 'Second' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 168,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 18,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 8,
                              "children": [],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:08:43.619Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:08:43.619Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 82,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:43.647Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-clicks-on-the-first-of-page-elements-lo-4c78de545e.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 14,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:43.751Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-the-text-of-page-elements--4c78de545e.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:08:43.618Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:08:42.980Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 126,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:08:42.979Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 126,
                "column": 16
              }
            },
            {
              "name": "Tess deselects [ 'First' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 186,
              "children": [
                {
                  "name": "Tess iterates over [ 'First' ]",
                  "outcome": "SUCCESS",
                  "duration": 176,
                  "children": [
                    {
                      "name": "Tess deselects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 150,
                      "children": [
                        {
                          "name": "Tess clicks on deselect button of the first of page elements located by deep css ('.dropdown-selected-option') of input field where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 96,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:43.833Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 101,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-clicks-on-deselect-button-of-the-first--3f34c2e04d.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does not contain \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 12,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:43.949Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-the-text-of-page-elements--3f34c2e04d.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:08:43.833Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 83,
                        "column": 52
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:08:43.817Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 130,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:08:43.817Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 130,
                "column": 16
              }
            },
            {
              "name": "Tess ensures that selected options does equal [ \"Third\", \"Second\" ]",
              "outcome": "SUCCESS",
              "duration": 12,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T11:08:44.014Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 132,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-selected-options-does-equa-3f34c2e04d.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        },
        {
          "outcome": "SUCCESS",
          "run": "1146",
          "timestamp": "2026-08-20T11:10:24.429Z",
          "duration": 1297,
          "activities": [
            {
              "name": "Tess selects [ 'First', 'Third', 'Second' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 880,
              "children": [
                {
                  "name": "Tess iterates over [ 'First', 'Third', 'Second' ]",
                  "outcome": "SUCCESS",
                  "duration": 869,
                  "children": [
                    {
                      "name": "Tess selects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 363,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 199,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 187,
                              "children": [
                                {
                                  "name": "Tess clicks on input field",
                                  "outcome": "SUCCESS",
                                  "duration": 84,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-20T11:10:35.404Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 110,
                                    "column": 27
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-clicks-on-input-field-b029cbc9ff.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                },
                                {
                                  "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                                  "outcome": "SUCCESS",
                                  "duration": 31,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-20T11:10:35.509Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 92,
                                    "column": 26
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-waits-until-page-element-located-by-dee-6d77c8f542.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                }
                              ],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:10:35.374Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:35.373Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 103,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:35.583Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-clicks-on-the-first-of-page-elements-lo-f71405e448.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 9,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:35.707Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-the-text-of-page-elements--6605a170fc.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:35.373Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    },
                    {
                      "name": "Tess selects 'Third' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 204,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 20,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 9,
                              "children": [],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:10:35.773Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:35.772Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 115,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:35.804Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-clicks-on-the-first-of-page-elements-lo-e3ea01a24e.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 14,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:35.941Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-the-text-of-page-elements--fe71e38b0d.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:35.771Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    },
                    {
                      "name": "Tess selects 'Second' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 193,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 17,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 6,
                              "children": [],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:10:36.010Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:36.010Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 97,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:36.038Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-clicks-on-the-first-of-page-elements-lo-4c78de545e.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 24,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:36.157Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-the-text-of-page-elements--4c78de545e.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:36.009Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:35.344Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 126,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:10:35.343Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 126,
                "column": 16
              }
            },
            {
              "name": "Tess deselects [ 'First' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 176,
              "children": [
                {
                  "name": "Tess iterates over [ 'First' ]",
                  "outcome": "SUCCESS",
                  "duration": 166,
                  "children": [
                    {
                      "name": "Tess deselects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 140,
                      "children": [
                        {
                          "name": "Tess clicks on deselect button of the first of page elements located by deep css ('.dropdown-selected-option') of input field where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 83,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:36.251Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 101,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-clicks-on-deselect-button-of-the-first--3f34c2e04d.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does not contain \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 13,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:36.356Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-the-text-of-page-elements--3f34c2e04d.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:36.250Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 83,
                        "column": 52
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:36.234Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 130,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:10:36.234Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 130,
                "column": 16
              }
            },
            {
              "name": "Tess ensures that selected options does equal [ \"Third\", \"Second\" ]",
              "outcome": "SUCCESS",
              "duration": 13,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T11:10:36.421Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 132,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-selected-options-does-equa-3f34c2e04d.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        }
      ],
      "cast": [
        {
          "name": "Tess",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://localhost:3100\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        }
      ]
    },
    {
      "name": "allows for selected options to be deselected",
      "category": "Dropdown",
      "outcome": "SUCCESS",
      "duration": 2791,
      "startedAt": "2026-08-20T11:10:44.951Z",
      "source": {
        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
        "line": 113
      },
      "tags": [
        {
          "type": "theme",
          "name": "Components"
        },
        {
          "type": "capability",
          "name": "Dropdown"
        },
        {
          "type": "feature",
          "name": "Dropdown"
        },
        {
          "type": "project",
          "name": "webkit"
        },
        {
          "type": "platform",
          "name": "Linux 6.17.0-1022-azure"
        },
        {
          "type": "browser",
          "name": "webkit 26.5"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-ct-web-components-template"
        }
      ],
      "activities": [
        {
          "name": "Tess selects [ 'First', 'Third', 'Second' ] from dropdown",
          "outcome": "SUCCESS",
          "duration": 2023,
          "children": [
            {
              "name": "Tess iterates over [ 'First', 'Third', 'Second' ]",
              "outcome": "SUCCESS",
              "duration": 2012,
              "children": [
                {
                  "name": "Tess selects 'First' from dropdown",
                  "outcome": "SUCCESS",
                  "duration": 990,
                  "children": [
                    {
                      "name": "Tess opens the dropdown",
                      "outcome": "SUCCESS",
                      "duration": 551,
                      "children": [
                        {
                          "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                          "outcome": "SUCCESS",
                          "duration": 540,
                          "children": [
                            {
                              "name": "Tess clicks on input field",
                              "outcome": "SUCCESS",
                              "duration": 77,
                              "children": [],
                              "type": "Interaction",
                              "startedAt": "2026-08-20T11:10:45.114Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 110,
                                "column": 27
                              },
                              "artifacts": [
                                {
                                  "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-clicks-on-input-field-bea7f7b144.png",
                                  "type": "screenshot"
                                }
                              ]
                            },
                            {
                              "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                              "outcome": "SUCCESS",
                              "duration": 41,
                              "children": [],
                              "type": "Interaction",
                              "startedAt": "2026-08-20T11:10:45.366Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              },
                              "artifacts": [
                                {
                                  "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-waits-until-page-element-located-by-deep--624c84d4c4.png",
                                  "type": "screenshot"
                                }
                              ]
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:45.090Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:45.089Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 92,
                        "column": 26
                      }
                    },
                    {
                      "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"First\"",
                      "outcome": "SUCCESS",
                      "duration": 95,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:45.652Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 93,
                        "column": 23
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-clicks-on-the-first-of-page-elements-loca-efccbf4739.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"First\"",
                      "outcome": "SUCCESS",
                      "duration": 7,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:45.910Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                        "line": 60,
                        "column": 13
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-the-text-of-page-elements-lo-efccbf4739.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:45.089Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                    "line": 72,
                    "column": 50
                  }
                },
                {
                  "name": "Tess selects 'Third' from dropdown",
                  "outcome": "SUCCESS",
                  "duration": 447,
                  "children": [
                    {
                      "name": "Tess opens the dropdown",
                      "outcome": "SUCCESS",
                      "duration": 15,
                      "children": [
                        {
                          "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                          "outcome": "SUCCESS",
                          "duration": 4,
                          "children": [],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:46.118Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:46.117Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 92,
                        "column": 26
                      }
                    },
                    {
                      "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Third\"",
                      "outcome": "SUCCESS",
                      "duration": 86,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:46.143Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 93,
                        "column": 23
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-clicks-on-the-first-of-page-elements-loca-7c194d682c.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Third\"",
                      "outcome": "SUCCESS",
                      "duration": 10,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:46.392Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                        "line": 60,
                        "column": 13
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-the-text-of-page-elements-lo-7c194d682c.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:46.116Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                    "line": 72,
                    "column": 50
                  }
                },
                {
                  "name": "Tess selects 'Second' from dropdown",
                  "outcome": "SUCCESS",
                  "duration": 465,
                  "children": [
                    {
                      "name": "Tess opens the dropdown",
                      "outcome": "SUCCESS",
                      "duration": 17,
                      "children": [
                        {
                          "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                          "outcome": "SUCCESS",
                          "duration": 6,
                          "children": [],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:46.597Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:46.596Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 92,
                        "column": 26
                      }
                    },
                    {
                      "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Second\"",
                      "outcome": "SUCCESS",
                      "duration": 88,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:46.624Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 93,
                        "column": 23
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-clicks-on-the-first-of-page-elements-loca-4d5363378d.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Second\"",
                      "outcome": "SUCCESS",
                      "duration": 25,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:46.873Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                        "line": 60,
                        "column": 13
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-the-text-of-page-elements-lo-4d5363378d.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:46.595Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                    "line": 72,
                    "column": 50
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:10:45.058Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 126,
                "column": 16
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T11:10:45.057Z",
          "location": {
            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
            "line": 126,
            "column": 16
          }
        },
        {
          "name": "Tess deselects [ 'First' ] from dropdown",
          "outcome": "SUCCESS",
          "duration": 453,
          "children": [
            {
              "name": "Tess iterates over [ 'First' ]",
              "outcome": "SUCCESS",
              "duration": 441,
              "children": [
                {
                  "name": "Tess deselects 'First' from dropdown",
                  "outcome": "SUCCESS",
                  "duration": 416,
                  "children": [
                    {
                      "name": "Tess clicks on deselect button of the first of page elements located by deep css ('.dropdown-selected-option') of input field where Text does include \"First\"",
                      "outcome": "SUCCESS",
                      "duration": 88,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:47.108Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 101,
                        "column": 23
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-clicks-on-deselect-button-of-the-first-of-42ea50e898.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does not contain \"First\"",
                      "outcome": "SUCCESS",
                      "duration": 11,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:47.359Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                        "line": 60,
                        "column": 13
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-the-text-of-page-elements-lo-42ea50e898.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:47.107Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                    "line": 83,
                    "column": 52
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:10:47.092Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 130,
                "column": 16
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T11:10:47.091Z",
          "location": {
            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
            "line": 130,
            "column": 16
          }
        },
        {
          "name": "Tess ensures that selected options does equal [ \"Third\", \"Second\" ]",
          "outcome": "SUCCESS",
          "duration": 10,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T11:10:47.555Z",
          "location": {
            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
            "line": 132,
            "column": 20
          },
          "artifacts": [
            {
              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-selected-options-does-equal--42ea50e898.png",
              "type": "screenshot"
            }
          ]
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "1140",
          "timestamp": "2026-08-18T23:07:06.992Z",
          "duration": 2742,
          "activities": [
            {
              "name": "Tess selects [ 'First', 'Third', 'Second' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 1955,
              "children": [
                {
                  "name": "Tess iterates over [ 'First', 'Third', 'Second' ]",
                  "outcome": "SUCCESS",
                  "duration": 1944,
                  "children": [
                    {
                      "name": "Tess selects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 945,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 503,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 492,
                              "children": [
                                {
                                  "name": "Tess clicks on input field",
                                  "outcome": "SUCCESS",
                                  "duration": 64,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-18T23:07:27.444Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 110,
                                    "column": 27
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-webkit-26-5-tess-clicks-on-input-field-bea7f7b144.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                },
                                {
                                  "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                                  "outcome": "SUCCESS",
                                  "duration": 37,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-18T23:07:27.671Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 92,
                                    "column": 26
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-webkit-26-5-tess-waits-until-page-element-located-by-deep--9d447e5451.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                }
                              ],
                              "type": "Task",
                              "startedAt": "2026-08-18T23:07:27.420Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-18T23:07:27.419Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 95,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:27.936Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-webkit-26-5-tess-clicks-on-the-first-of-page-elements-loca-efccbf4739.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 8,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:28.194Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-webkit-26-5-tess-ensures-that-the-text-of-page-elements-lo-efccbf4739.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-18T23:07:27.418Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    },
                    {
                      "name": "Tess selects 'Third' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 437,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 15,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 4,
                              "children": [],
                              "type": "Task",
                              "startedAt": "2026-08-18T23:07:28.399Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-18T23:07:28.398Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 88,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:28.424Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-webkit-26-5-tess-clicks-on-the-first-of-page-elements-loca-7c194d682c.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 10,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:28.674Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-webkit-26-5-tess-ensures-that-the-text-of-page-elements-lo-7c194d682c.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-18T23:07:28.398Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    },
                    {
                      "name": "Tess selects 'Second' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 452,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 15,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 4,
                              "children": [],
                              "type": "Task",
                              "startedAt": "2026-08-18T23:07:28.871Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-18T23:07:28.870Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 83,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:28.895Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-webkit-26-5-tess-clicks-on-the-first-of-page-elements-loca-4d5363378d.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 22,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:29.139Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-webkit-26-5-tess-ensures-that-the-text-of-page-elements-lo-4d5363378d.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-18T23:07:28.870Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-18T23:07:27.388Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 126,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-18T23:07:27.388Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 126,
                "column": 16
              }
            },
            {
              "name": "Tess deselects [ 'First' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 463,
              "children": [
                {
                  "name": "Tess iterates over [ 'First' ]",
                  "outcome": "SUCCESS",
                  "duration": 452,
                  "children": [
                    {
                      "name": "Tess deselects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 427,
                      "children": [
                        {
                          "name": "Tess clicks on deselect button of the first of page elements located by deep css ('.dropdown-selected-option') of input field where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 91,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:29.370Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 101,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-webkit-26-5-tess-clicks-on-deselect-button-of-the-first-of-42ea50e898.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does not contain \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 10,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:29.625Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-webkit-26-5-tess-ensures-that-the-text-of-page-elements-lo-42ea50e898.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-18T23:07:29.369Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 83,
                        "column": 52
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-18T23:07:29.354Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 130,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-18T23:07:29.353Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 130,
                "column": 16
              }
            },
            {
              "name": "Tess ensures that selected options does equal [ \"Third\", \"Second\" ]",
              "outcome": "SUCCESS",
              "duration": 10,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-18T23:07:29.828Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 132,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-webkit-26-5-tess-ensures-that-selected-options-does-equal--42ea50e898.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        },
        {
          "outcome": "SUCCESS",
          "run": "1144",
          "timestamp": "2026-08-20T11:08:32.384Z",
          "duration": 2741,
          "activities": [
            {
              "name": "Tess selects [ 'First', 'Third', 'Second' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 1974,
              "children": [
                {
                  "name": "Tess iterates over [ 'First', 'Third', 'Second' ]",
                  "outcome": "SUCCESS",
                  "duration": 1962,
                  "children": [
                    {
                      "name": "Tess selects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 965,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 515,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 504,
                              "children": [
                                {
                                  "name": "Tess clicks on input field",
                                  "outcome": "SUCCESS",
                                  "duration": 75,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-20T11:08:52.467Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 110,
                                    "column": 27
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-clicks-on-input-field-bea7f7b144.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                },
                                {
                                  "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                                  "outcome": "SUCCESS",
                                  "duration": 35,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-20T11:08:52.716Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 92,
                                    "column": 26
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-waits-until-page-element-located-by-deep--7dccfefddc.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                }
                              ],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:08:52.444Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:08:52.443Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 107,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:52.969Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-clicks-on-the-first-of-page-elements-loca-efccbf4739.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 8,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:53.239Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-the-text-of-page-elements-lo-efccbf4739.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:08:52.443Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    },
                    {
                      "name": "Tess selects 'Third' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 437,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 15,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 4,
                              "children": [],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:08:53.443Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:08:53.442Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 74,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:53.468Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-clicks-on-the-first-of-page-elements-loca-7c194d682c.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 11,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:53.705Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-the-text-of-page-elements-lo-7c194d682c.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:08:53.441Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    },
                    {
                      "name": "Tess selects 'Second' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 458,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 15,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 4,
                              "children": [],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:08:53.913Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:08:53.912Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 85,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:53.938Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-clicks-on-the-first-of-page-elements-loca-4d5363378d.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 22,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:54.187Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-the-text-of-page-elements-lo-4d5363378d.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:08:53.912Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:08:52.418Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 126,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:08:52.417Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 126,
                "column": 16
              }
            },
            {
              "name": "Tess deselects [ 'First' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 450,
              "children": [
                {
                  "name": "Tess iterates over [ 'First' ]",
                  "outcome": "SUCCESS",
                  "duration": 438,
                  "children": [
                    {
                      "name": "Tess deselects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 413,
                      "children": [
                        {
                          "name": "Tess clicks on deselect button of the first of page elements located by deep css ('.dropdown-selected-option') of input field where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 75,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:54.418Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 101,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-clicks-on-deselect-button-of-the-first-of-42ea50e898.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does not contain \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 10,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:54.658Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-the-text-of-page-elements-lo-42ea50e898.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:08:54.417Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 83,
                        "column": 52
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:08:54.402Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 130,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:08:54.401Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 130,
                "column": 16
              }
            },
            {
              "name": "Tess ensures that selected options does equal [ \"Third\", \"Second\" ]",
              "outcome": "SUCCESS",
              "duration": 9,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T11:08:54.862Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 132,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-selected-options-does-equal--42ea50e898.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        },
        {
          "outcome": "SUCCESS",
          "run": "1146",
          "timestamp": "2026-08-20T11:10:24.429Z",
          "duration": 2791,
          "activities": [
            {
              "name": "Tess selects [ 'First', 'Third', 'Second' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 2023,
              "children": [
                {
                  "name": "Tess iterates over [ 'First', 'Third', 'Second' ]",
                  "outcome": "SUCCESS",
                  "duration": 2012,
                  "children": [
                    {
                      "name": "Tess selects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 990,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 551,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 540,
                              "children": [
                                {
                                  "name": "Tess clicks on input field",
                                  "outcome": "SUCCESS",
                                  "duration": 77,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-20T11:10:45.114Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 110,
                                    "column": 27
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-clicks-on-input-field-bea7f7b144.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                },
                                {
                                  "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                                  "outcome": "SUCCESS",
                                  "duration": 41,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-20T11:10:45.366Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 92,
                                    "column": 26
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-waits-until-page-element-located-by-deep--624c84d4c4.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                }
                              ],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:10:45.090Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:45.089Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 95,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:45.652Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-clicks-on-the-first-of-page-elements-loca-efccbf4739.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 7,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:45.910Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-the-text-of-page-elements-lo-efccbf4739.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:45.089Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    },
                    {
                      "name": "Tess selects 'Third' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 447,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 15,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 4,
                              "children": [],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:10:46.118Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:46.117Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 86,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:46.143Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-clicks-on-the-first-of-page-elements-loca-7c194d682c.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Third\"",
                          "outcome": "SUCCESS",
                          "duration": 10,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:46.392Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-the-text-of-page-elements-lo-7c194d682c.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:46.116Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    },
                    {
                      "name": "Tess selects 'Second' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 465,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 17,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 6,
                              "children": [],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:10:46.597Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:46.596Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 88,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:46.624Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-clicks-on-the-first-of-page-elements-loca-4d5363378d.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 25,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:46.873Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-the-text-of-page-elements-lo-4d5363378d.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:46.595Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:45.058Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 126,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:10:45.057Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 126,
                "column": 16
              }
            },
            {
              "name": "Tess deselects [ 'First' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 453,
              "children": [
                {
                  "name": "Tess iterates over [ 'First' ]",
                  "outcome": "SUCCESS",
                  "duration": 441,
                  "children": [
                    {
                      "name": "Tess deselects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 416,
                      "children": [
                        {
                          "name": "Tess clicks on deselect button of the first of page elements located by deep css ('.dropdown-selected-option') of input field where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 88,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:47.108Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 101,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-clicks-on-deselect-button-of-the-first-of-42ea50e898.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does not contain \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 11,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:47.359Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-the-text-of-page-elements-lo-42ea50e898.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:47.107Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 83,
                        "column": 52
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:47.092Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 130,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:10:47.091Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 130,
                "column": 16
              }
            },
            {
              "name": "Tess ensures that selected options does equal [ \"Third\", \"Second\" ]",
              "outcome": "SUCCESS",
              "duration": 10,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T11:10:47.555Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 132,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-selected-options-does-equal--42ea50e898.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        }
      ],
      "cast": [
        {
          "name": "Tess",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://localhost:3100\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        }
      ]
    },
    {
      "name": "goes back to showing the placeholder when all the selected options get deselected",
      "category": "Dropdown",
      "outcome": "SUCCESS",
      "duration": 1249,
      "startedAt": "2026-08-20T11:10:28.693Z",
      "source": {
        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
        "line": 139
      },
      "tags": [
        {
          "type": "theme",
          "name": "Components"
        },
        {
          "type": "capability",
          "name": "Dropdown"
        },
        {
          "type": "feature",
          "name": "Dropdown"
        },
        {
          "type": "project",
          "name": "chromium"
        },
        {
          "type": "platform",
          "name": "Linux 6.17.0-1022-azure"
        },
        {
          "type": "browser",
          "name": "chromium 151.0.7922.34"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-ct-web-components-template"
        }
      ],
      "activities": [
        {
          "name": "Tess selects [ 'First', 'Second' ] from dropdown",
          "outcome": "SUCCESS",
          "duration": 655,
          "children": [
            {
              "name": "Tess iterates over [ 'First', 'Second' ]",
              "outcome": "SUCCESS",
              "duration": 645,
              "children": [
                {
                  "name": "Tess selects 'First' from dropdown",
                  "outcome": "SUCCESS",
                  "duration": 386,
                  "children": [
                    {
                      "name": "Tess opens the dropdown",
                      "outcome": "SUCCESS",
                      "duration": 196,
                      "children": [
                        {
                          "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                          "outcome": "SUCCESS",
                          "duration": 185,
                          "children": [
                            {
                              "name": "Tess clicks on input field",
                              "outcome": "SUCCESS",
                              "duration": 55,
                              "children": [],
                              "type": "Interaction",
                              "startedAt": "2026-08-20T11:10:28.836Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 110,
                                "column": 27
                              },
                              "artifacts": [
                                {
                                  "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-input-field-5a32e9ada1.png",
                                  "type": "screenshot"
                                }
                              ]
                            },
                            {
                              "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                              "outcome": "SUCCESS",
                              "duration": 25,
                              "children": [],
                              "type": "Interaction",
                              "startedAt": "2026-08-20T11:10:28.933Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              },
                              "artifacts": [
                                {
                                  "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-waits-until-page-element-locat-bfc16cca9d.png",
                                  "type": "screenshot"
                                }
                              ]
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:28.813Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:28.813Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 92,
                        "column": 26
                      }
                    },
                    {
                      "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"First\"",
                      "outcome": "SUCCESS",
                      "duration": 88,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:29.020Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 93,
                        "column": 23
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-the-first-of-page-el-f3bb44e501.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"First\"",
                      "outcome": "SUCCESS",
                      "duration": 7,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:29.150Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                        "line": 60,
                        "column": 13
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-the-text-of-page--db7313f6f2.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:28.812Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                    "line": 72,
                    "column": 50
                  }
                },
                {
                  "name": "Tess selects 'Second' from dropdown",
                  "outcome": "SUCCESS",
                  "duration": 191,
                  "children": [
                    {
                      "name": "Tess opens the dropdown",
                      "outcome": "SUCCESS",
                      "duration": 17,
                      "children": [
                        {
                          "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                          "outcome": "SUCCESS",
                          "duration": 6,
                          "children": [],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:29.235Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:29.234Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 92,
                        "column": 26
                      }
                    },
                    {
                      "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Second\"",
                      "outcome": "SUCCESS",
                      "duration": 78,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:29.262Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 93,
                        "column": 23
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-the-first-of-page-el-a4586e7312.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Second\"",
                      "outcome": "SUCCESS",
                      "duration": 10,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:29.383Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                        "line": 60,
                        "column": 13
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-the-text-of-page--3e4adeb145.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:29.233Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                    "line": 72,
                    "column": 50
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:10:28.789Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 154,
                "column": 16
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T11:10:28.789Z",
          "location": {
            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
            "line": 154,
            "column": 16
          }
        },
        {
          "name": "Tess deselects [ 'First', 'Second' ] from dropdown",
          "outcome": "SUCCESS",
          "duration": 358,
          "children": [
            {
              "name": "Tess iterates over [ 'First', 'Second' ]",
              "outcome": "SUCCESS",
              "duration": 347,
              "children": [
                {
                  "name": "Tess deselects 'First' from dropdown",
                  "outcome": "SUCCESS",
                  "duration": 152,
                  "children": [
                    {
                      "name": "Tess clicks on deselect button of the first of page elements located by deep css ('.dropdown-selected-option') of input field where Text does include \"First\"",
                      "outcome": "SUCCESS",
                      "duration": 68,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:29.472Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 101,
                        "column": 23
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-deselect-button-of-t-745fdf79c8.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does not contain \"First\"",
                      "outcome": "SUCCESS",
                      "duration": 9,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:29.583Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                        "line": 60,
                        "column": 13
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-the-text-of-page--745fdf79c8.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:29.471Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                    "line": 83,
                    "column": 52
                  }
                },
                {
                  "name": "Tess deselects 'Second' from dropdown",
                  "outcome": "SUCCESS",
                  "duration": 144,
                  "children": [
                    {
                      "name": "Tess clicks on deselect button of the first of page elements located by deep css ('.dropdown-selected-option') of input field where Text does include \"Second\"",
                      "outcome": "SUCCESS",
                      "duration": 58,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:29.649Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 101,
                        "column": 23
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-deselect-button-of-t-461b2d638a.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does not contain \"Second\"",
                      "outcome": "SUCCESS",
                      "duration": 4,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:29.748Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                        "line": 60,
                        "column": 13
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-the-text-of-page--461b2d638a.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:29.649Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                    "line": 83,
                    "column": 52
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:10:29.456Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 159,
                "column": 16
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T11:10:29.455Z",
          "location": {
            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
            "line": 159,
            "column": 16
          }
        },
        {
          "name": "Tess ensures that <<selected options>>.length does equal 0",
          "outcome": "SUCCESS",
          "duration": 8,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T11:10:29.829Z",
          "location": {
            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
            "line": 161,
            "column": 20
          },
          "artifacts": [
            {
              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-0-does-equal-0-461b2d638a.png",
              "type": "screenshot"
            }
          ]
        },
        {
          "name": "Tess ensures that placeholder of dropdown does equal \"Select option\"",
          "outcome": "SUCCESS",
          "duration": 6,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T11:10:29.869Z",
          "location": {
            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
            "line": 162,
            "column": 20
          },
          "artifacts": [
            {
              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-placeholder-of-dr-461b2d638a.png",
              "type": "screenshot"
            }
          ]
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "1140",
          "timestamp": "2026-08-18T23:07:06.992Z",
          "duration": 1261,
          "activities": [
            {
              "name": "Tess selects [ 'First', 'Second' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 671,
              "children": [
                {
                  "name": "Tess iterates over [ 'First', 'Second' ]",
                  "outcome": "SUCCESS",
                  "duration": 660,
                  "children": [
                    {
                      "name": "Tess selects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 386,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 197,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 185,
                              "children": [
                                {
                                  "name": "Tess clicks on input field",
                                  "outcome": "SUCCESS",
                                  "duration": 55,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-18T23:07:11.293Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 110,
                                    "column": 27
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-input-field-5a32e9ada1.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                },
                                {
                                  "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                                  "outcome": "SUCCESS",
                                  "duration": 26,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-18T23:07:11.389Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 92,
                                    "column": 26
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-chromium-151-0-7922-34-tess-waits-until-page-element-locat-bfc16cca9d.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                }
                              ],
                              "type": "Task",
                              "startedAt": "2026-08-18T23:07:11.270Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-18T23:07:11.269Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 88,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:11.477Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-the-first-of-page-el-f3bb44e501.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 7,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:11.606Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-the-text-of-page--db7313f6f2.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-18T23:07:11.268Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    },
                    {
                      "name": "Tess selects 'Second' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 208,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 17,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 6,
                              "children": [],
                              "type": "Task",
                              "startedAt": "2026-08-18T23:07:11.689Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-18T23:07:11.688Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 97,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:11.716Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-the-first-of-page-el-1fd088fed2.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 11,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:11.855Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-the-text-of-page--3e4adeb145.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-18T23:07:11.688Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-18T23:07:11.246Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 154,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-18T23:07:11.246Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 154,
                "column": 16
              }
            },
            {
              "name": "Tess deselects [ 'First', 'Second' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 362,
              "children": [
                {
                  "name": "Tess iterates over [ 'First', 'Second' ]",
                  "outcome": "SUCCESS",
                  "duration": 352,
                  "children": [
                    {
                      "name": "Tess deselects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 154,
                      "children": [
                        {
                          "name": "Tess clicks on deselect button of the first of page elements located by deep css ('.dropdown-selected-option') of input field where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 68,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:11.945Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 101,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-deselect-button-of-t-745fdf79c8.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does not contain \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 12,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:12.055Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-the-text-of-page--745fdf79c8.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-18T23:07:11.944Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 83,
                        "column": 52
                      }
                    },
                    {
                      "name": "Tess deselects 'Second' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 145,
                      "children": [
                        {
                          "name": "Tess clicks on deselect button of the first of page elements located by deep css ('.dropdown-selected-option') of input field where Text does include \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 55,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:12.125Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 101,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-deselect-button-of-t-461b2d638a.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does not contain \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 5,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:12.222Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-the-text-of-page--461b2d638a.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-18T23:07:12.124Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 83,
                        "column": 52
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-18T23:07:11.928Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 159,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-18T23:07:11.928Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 159,
                "column": 16
              }
            },
            {
              "name": "Tess ensures that <<selected options>>.length does equal 0",
              "outcome": "SUCCESS",
              "duration": 9,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-18T23:07:12.307Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 161,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-0-does-equal-0-461b2d638a.png",
                  "type": "screenshot"
                }
              ]
            },
            {
              "name": "Tess ensures that placeholder of dropdown does equal \"Select option\"",
              "outcome": "SUCCESS",
              "duration": 5,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-18T23:07:12.347Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 162,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-placeholder-of-dr-461b2d638a.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        },
        {
          "outcome": "SUCCESS",
          "run": "1144",
          "timestamp": "2026-08-20T11:08:32.384Z",
          "duration": 1256,
          "activities": [
            {
              "name": "Tess selects [ 'First', 'Second' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 670,
              "children": [
                {
                  "name": "Tess iterates over [ 'First', 'Second' ]",
                  "outcome": "SUCCESS",
                  "duration": 659,
                  "children": [
                    {
                      "name": "Tess selects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 390,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 200,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 188,
                              "children": [
                                {
                                  "name": "Tess clicks on input field",
                                  "outcome": "SUCCESS",
                                  "duration": 62,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-20T11:08:36.656Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 110,
                                    "column": 27
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-input-field-5a32e9ada1.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                },
                                {
                                  "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                                  "outcome": "SUCCESS",
                                  "duration": 23,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-20T11:08:36.760Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 92,
                                    "column": 26
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-waits-until-page-element-locat-bfc16cca9d.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                }
                              ],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:08:36.635Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:08:36.634Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 91,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:36.844Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-the-first-of-page-el-f3bb44e501.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 7,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:36.976Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-the-text-of-page--db7313f6f2.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:08:36.634Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    },
                    {
                      "name": "Tess selects 'Second' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 202,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 16,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 6,
                              "children": [],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:08:37.059Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:08:37.059Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 82,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:37.086Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-the-first-of-page-el-a4586e7312.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 9,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:37.209Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-the-text-of-page--3e4adeb145.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:08:37.058Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:08:36.611Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 154,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:08:36.610Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 154,
                "column": 16
              }
            },
            {
              "name": "Tess deselects [ 'First', 'Second' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 366,
              "children": [
                {
                  "name": "Tess iterates over [ 'First', 'Second' ]",
                  "outcome": "SUCCESS",
                  "duration": 356,
                  "children": [
                    {
                      "name": "Tess deselects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 151,
                      "children": [
                        {
                          "name": "Tess clicks on deselect button of the first of page elements located by deep css ('.dropdown-selected-option') of input field where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 59,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:37.308Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 101,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-deselect-button-of-t-745fdf79c8.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does not contain \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 8,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:37.410Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-the-text-of-page--745fdf79c8.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:08:37.308Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 83,
                        "column": 52
                      }
                    },
                    {
                      "name": "Tess deselects 'Second' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 153,
                      "children": [
                        {
                          "name": "Tess clicks on deselect button of the first of page elements located by deep css ('.dropdown-selected-option') of input field where Text does include \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 67,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:37.484Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 101,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-deselect-button-of-t-461b2d638a.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does not contain \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 3,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:37.593Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-the-text-of-page--461b2d638a.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:08:37.484Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 83,
                        "column": 52
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:08:37.291Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 159,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:08:37.291Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 159,
                "column": 16
              }
            },
            {
              "name": "Tess ensures that <<selected options>>.length does equal 0",
              "outcome": "SUCCESS",
              "duration": 8,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T11:08:37.672Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 161,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-0-does-equal-0-461b2d638a.png",
                  "type": "screenshot"
                }
              ]
            },
            {
              "name": "Tess ensures that placeholder of dropdown does equal \"Select option\"",
              "outcome": "SUCCESS",
              "duration": 6,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T11:08:37.711Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 162,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-placeholder-of-dr-461b2d638a.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        },
        {
          "outcome": "SUCCESS",
          "run": "1146",
          "timestamp": "2026-08-20T11:10:24.429Z",
          "duration": 1249,
          "activities": [
            {
              "name": "Tess selects [ 'First', 'Second' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 655,
              "children": [
                {
                  "name": "Tess iterates over [ 'First', 'Second' ]",
                  "outcome": "SUCCESS",
                  "duration": 645,
                  "children": [
                    {
                      "name": "Tess selects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 386,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 196,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 185,
                              "children": [
                                {
                                  "name": "Tess clicks on input field",
                                  "outcome": "SUCCESS",
                                  "duration": 55,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-20T11:10:28.836Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 110,
                                    "column": 27
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-input-field-5a32e9ada1.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                },
                                {
                                  "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                                  "outcome": "SUCCESS",
                                  "duration": 25,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-20T11:10:28.933Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 92,
                                    "column": 26
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-waits-until-page-element-locat-bfc16cca9d.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                }
                              ],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:10:28.813Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:28.813Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 88,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:29.020Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-the-first-of-page-el-f3bb44e501.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 7,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:29.150Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-the-text-of-page--db7313f6f2.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:28.812Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    },
                    {
                      "name": "Tess selects 'Second' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 191,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 17,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 6,
                              "children": [],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:10:29.235Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:29.234Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 78,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:29.262Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-the-first-of-page-el-a4586e7312.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 10,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:29.383Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-the-text-of-page--3e4adeb145.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:29.233Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:28.789Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 154,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:10:28.789Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 154,
                "column": 16
              }
            },
            {
              "name": "Tess deselects [ 'First', 'Second' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 358,
              "children": [
                {
                  "name": "Tess iterates over [ 'First', 'Second' ]",
                  "outcome": "SUCCESS",
                  "duration": 347,
                  "children": [
                    {
                      "name": "Tess deselects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 152,
                      "children": [
                        {
                          "name": "Tess clicks on deselect button of the first of page elements located by deep css ('.dropdown-selected-option') of input field where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 68,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:29.472Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 101,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-deselect-button-of-t-745fdf79c8.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does not contain \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 9,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:29.583Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-the-text-of-page--745fdf79c8.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:29.471Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 83,
                        "column": 52
                      }
                    },
                    {
                      "name": "Tess deselects 'Second' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 144,
                      "children": [
                        {
                          "name": "Tess clicks on deselect button of the first of page elements located by deep css ('.dropdown-selected-option') of input field where Text does include \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 58,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:29.649Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 101,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-clicks-on-deselect-button-of-t-461b2d638a.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does not contain \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 4,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:29.748Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-the-text-of-page--461b2d638a.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:29.649Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 83,
                        "column": 52
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:29.456Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 159,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:10:29.455Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 159,
                "column": 16
              }
            },
            {
              "name": "Tess ensures that <<selected options>>.length does equal 0",
              "outcome": "SUCCESS",
              "duration": 8,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T11:10:29.829Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 161,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-0-does-equal-0-461b2d638a.png",
                  "type": "screenshot"
                }
              ]
            },
            {
              "name": "Tess ensures that placeholder of dropdown does equal \"Select option\"",
              "outcome": "SUCCESS",
              "duration": 6,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T11:10:29.869Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 162,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-chromium-151-0-7922-34-tess-ensures-that-placeholder-of-dr-461b2d638a.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        }
      ],
      "cast": [
        {
          "name": "Tess",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://localhost:3100\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        }
      ]
    },
    {
      "name": "goes back to showing the placeholder when all the selected options get deselected",
      "category": "Dropdown",
      "outcome": "SUCCESS",
      "duration": 1275,
      "startedAt": "2026-08-20T11:10:36.511Z",
      "source": {
        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
        "line": 139
      },
      "tags": [
        {
          "type": "theme",
          "name": "Components"
        },
        {
          "type": "capability",
          "name": "Dropdown"
        },
        {
          "type": "feature",
          "name": "Dropdown"
        },
        {
          "type": "project",
          "name": "firefox"
        },
        {
          "type": "platform",
          "name": "Linux 6.17.0-1022-azure"
        },
        {
          "type": "browser",
          "name": "firefox 153.0"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-ct-web-components-template"
        }
      ],
      "activities": [
        {
          "name": "Tess selects [ 'First', 'Second' ] from dropdown",
          "outcome": "SUCCESS",
          "duration": 636,
          "children": [
            {
              "name": "Tess iterates over [ 'First', 'Second' ]",
              "outcome": "SUCCESS",
              "duration": 624,
              "children": [
                {
                  "name": "Tess selects 'First' from dropdown",
                  "outcome": "SUCCESS",
                  "duration": 354,
                  "children": [
                    {
                      "name": "Tess opens the dropdown",
                      "outcome": "SUCCESS",
                      "duration": 187,
                      "children": [
                        {
                          "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                          "outcome": "SUCCESS",
                          "duration": 176,
                          "children": [
                            {
                              "name": "Tess clicks on input field",
                              "outcome": "SUCCESS",
                              "duration": 72,
                              "children": [],
                              "type": "Interaction",
                              "startedAt": "2026-08-20T11:10:36.732Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 110,
                                "column": 27
                              },
                              "artifacts": [
                                {
                                  "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-clicks-on-input-field-b029cbc9ff.png",
                                  "type": "screenshot"
                                }
                              ]
                            },
                            {
                              "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                              "outcome": "SUCCESS",
                              "duration": 30,
                              "children": [],
                              "type": "Interaction",
                              "startedAt": "2026-08-20T11:10:36.825Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              },
                              "artifacts": [
                                {
                                  "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-waits-until-page-element-located-by-dee-2d03a55872.png",
                                  "type": "screenshot"
                                }
                              ]
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:36.700Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:36.700Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 92,
                        "column": 26
                      }
                    },
                    {
                      "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"First\"",
                      "outcome": "SUCCESS",
                      "duration": 103,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:36.899Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 93,
                        "column": 23
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-clicks-on-the-first-of-page-elements-lo-acab3a7760.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"First\"",
                      "outcome": "SUCCESS",
                      "duration": 9,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:37.023Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                        "line": 60,
                        "column": 13
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-the-text-of-page-elements--9ecf9c3673.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:36.699Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                    "line": 72,
                    "column": 50
                  }
                },
                {
                  "name": "Tess selects 'Second' from dropdown",
                  "outcome": "SUCCESS",
                  "duration": 202,
                  "children": [
                    {
                      "name": "Tess opens the dropdown",
                      "outcome": "SUCCESS",
                      "duration": 18,
                      "children": [
                        {
                          "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                          "outcome": "SUCCESS",
                          "duration": 7,
                          "children": [],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:37.090Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:37.089Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 92,
                        "column": 26
                      }
                    },
                    {
                      "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Second\"",
                      "outcome": "SUCCESS",
                      "duration": 117,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:37.118Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 93,
                        "column": 23
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-clicks-on-the-first-of-page-elements-lo-463209c15b.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Second\"",
                      "outcome": "SUCCESS",
                      "duration": 13,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:37.256Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                        "line": 60,
                        "column": 13
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-the-text-of-page-elements--2aa067c765.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:37.088Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                    "line": 72,
                    "column": 50
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:10:36.676Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 154,
                "column": 16
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T11:10:36.675Z",
          "location": {
            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
            "line": 154,
            "column": 16
          }
        },
        {
          "name": "Tess deselects [ 'First', 'Second' ] from dropdown",
          "outcome": "SUCCESS",
          "duration": 339,
          "children": [
            {
              "name": "Tess iterates over [ 'First', 'Second' ]",
              "outcome": "SUCCESS",
              "duration": 327,
              "children": [
                {
                  "name": "Tess deselects 'First' from dropdown",
                  "outcome": "SUCCESS",
                  "duration": 131,
                  "children": [
                    {
                      "name": "Tess clicks on deselect button of the first of page elements located by deep css ('.dropdown-selected-option') of input field where Text does include \"First\"",
                      "outcome": "SUCCESS",
                      "duration": 78,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:37.339Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 101,
                        "column": 23
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-clicks-on-deselect-button-of-the-first--a208d22e04.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does not contain \"First\"",
                      "outcome": "SUCCESS",
                      "duration": 11,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:37.438Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                        "line": 60,
                        "column": 13
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-the-text-of-page-elements--a208d22e04.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:37.338Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                    "line": 83,
                    "column": 52
                  }
                },
                {
                  "name": "Tess deselects 'Second' from dropdown",
                  "outcome": "SUCCESS",
                  "duration": 144,
                  "children": [
                    {
                      "name": "Tess clicks on deselect button of the first of page elements located by deep css ('.dropdown-selected-option') of input field where Text does include \"Second\"",
                      "outcome": "SUCCESS",
                      "duration": 89,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:37.495Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 101,
                        "column": 23
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-clicks-on-deselect-button-of-the-first--8a730e94fd.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does not contain \"Second\"",
                      "outcome": "SUCCESS",
                      "duration": 4,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:37.605Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                        "line": 60,
                        "column": 13
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-the-text-of-page-elements--8a730e94fd.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:37.495Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                    "line": 83,
                    "column": 52
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:10:37.322Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 159,
                "column": 16
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T11:10:37.321Z",
          "location": {
            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
            "line": 159,
            "column": 16
          }
        },
        {
          "name": "Tess ensures that <<selected options>>.length does equal 0",
          "outcome": "SUCCESS",
          "duration": 13,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T11:10:37.676Z",
          "location": {
            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
            "line": 161,
            "column": 20
          },
          "artifacts": [
            {
              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-0-does-equal-0-8a730e94fd.png",
              "type": "screenshot"
            }
          ]
        },
        {
          "name": "Tess ensures that placeholder of dropdown does equal \"Select option\"",
          "outcome": "SUCCESS",
          "duration": 7,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T11:10:37.722Z",
          "location": {
            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
            "line": 162,
            "column": 20
          },
          "artifacts": [
            {
              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-placeholder-of-dropdown-do-8a730e94fd.png",
              "type": "screenshot"
            }
          ]
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "1140",
          "timestamp": "2026-08-18T23:07:06.992Z",
          "duration": 1237,
          "activities": [
            {
              "name": "Tess selects [ 'First', 'Second' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 619,
              "children": [
                {
                  "name": "Tess iterates over [ 'First', 'Second' ]",
                  "outcome": "SUCCESS",
                  "duration": 608,
                  "children": [
                    {
                      "name": "Tess selects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 355,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 185,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 175,
                              "children": [
                                {
                                  "name": "Tess clicks on input field",
                                  "outcome": "SUCCESS",
                                  "duration": 73,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-18T23:07:19.179Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 110,
                                    "column": 27
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-firefox-153-0-tess-clicks-on-input-field-b029cbc9ff.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                },
                                {
                                  "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                                  "outcome": "SUCCESS",
                                  "duration": 28,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-18T23:07:19.274Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 92,
                                    "column": 26
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-firefox-153-0-tess-waits-until-page-element-located-by-dee-2d03a55872.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                }
                              ],
                              "type": "Task",
                              "startedAt": "2026-08-18T23:07:19.148Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-18T23:07:19.148Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 107,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:19.344Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-firefox-153-0-tess-clicks-on-the-first-of-page-elements-lo-dcefdd6473.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 9,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:19.472Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-firefox-153-0-tess-ensures-that-the-text-of-page-elements--c9b95b32d5.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-18T23:07:19.147Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    },
                    {
                      "name": "Tess selects 'Second' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 187,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 17,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 7,
                              "children": [],
                              "type": "Task",
                              "startedAt": "2026-08-18T23:07:19.536Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-18T23:07:19.536Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 104,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:19.564Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-firefox-153-0-tess-clicks-on-the-first-of-page-elements-lo-cf92a698ef.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 13,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:19.689Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-firefox-153-0-tess-ensures-that-the-text-of-page-elements--f3194a3339.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-18T23:07:19.535Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-18T23:07:19.125Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 154,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-18T23:07:19.124Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 154,
                "column": 16
              }
            },
            {
              "name": "Tess deselects [ 'First', 'Second' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 341,
              "children": [
                {
                  "name": "Tess iterates over [ 'First', 'Second' ]",
                  "outcome": "SUCCESS",
                  "duration": 329,
                  "children": [
                    {
                      "name": "Tess deselects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 148,
                      "children": [
                        {
                          "name": "Tess clicks on deselect button of the first of page elements located by deep css ('.dropdown-selected-option') of input field where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 97,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:19.770Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 101,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-firefox-153-0-tess-clicks-on-deselect-button-of-the-first--a208d22e04.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does not contain \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 10,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:19.888Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-firefox-153-0-tess-ensures-that-the-text-of-page-elements--a208d22e04.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-18T23:07:19.770Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 83,
                        "column": 52
                      }
                    },
                    {
                      "name": "Tess deselects 'Second' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 129,
                      "children": [
                        {
                          "name": "Tess clicks on deselect button of the first of page elements located by deep css ('.dropdown-selected-option') of input field where Text does include \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 72,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:19.944Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 101,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-firefox-153-0-tess-clicks-on-deselect-button-of-the-first--8a730e94fd.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does not contain \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 4,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:20.038Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-firefox-153-0-tess-ensures-that-the-text-of-page-elements--8a730e94fd.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-18T23:07:19.944Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 83,
                        "column": 52
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-18T23:07:19.754Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 159,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-18T23:07:19.753Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 159,
                "column": 16
              }
            },
            {
              "name": "Tess ensures that <<selected options>>.length does equal 0",
              "outcome": "SUCCESS",
              "duration": 15,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-18T23:07:20.110Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 161,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-firefox-153-0-tess-ensures-that-0-does-equal-0-8a730e94fd.png",
                  "type": "screenshot"
                }
              ]
            },
            {
              "name": "Tess ensures that placeholder of dropdown does equal \"Select option\"",
              "outcome": "SUCCESS",
              "duration": 6,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-18T23:07:20.157Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 162,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-firefox-153-0-tess-ensures-that-placeholder-of-dropdown-do-8a730e94fd.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        },
        {
          "outcome": "SUCCESS",
          "run": "1144",
          "timestamp": "2026-08-20T11:08:32.384Z",
          "duration": 1207,
          "activities": [
            {
              "name": "Tess selects [ 'First', 'Second' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 620,
              "children": [
                {
                  "name": "Tess iterates over [ 'First', 'Second' ]",
                  "outcome": "SUCCESS",
                  "duration": 609,
                  "children": [
                    {
                      "name": "Tess selects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 352,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 184,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 173,
                              "children": [
                                {
                                  "name": "Tess clicks on input field",
                                  "outcome": "SUCCESS",
                                  "duration": 71,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-20T11:08:44.309Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 110,
                                    "column": 27
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-clicks-on-input-field-b029cbc9ff.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                },
                                {
                                  "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                                  "outcome": "SUCCESS",
                                  "duration": 29,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-20T11:08:44.402Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 92,
                                    "column": 26
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-waits-until-page-element-located-by-dee-e2143a8ceb.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                }
                              ],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:08:44.278Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:08:44.278Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 106,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:44.473Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-clicks-on-the-first-of-page-elements-lo-ebc7805ee9.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 8,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:44.600Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-the-text-of-page-elements--7e1e47a3c4.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:08:44.277Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    },
                    {
                      "name": "Tess selects 'Second' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 191,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 16,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 7,
                              "children": [],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:08:44.663Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:08:44.663Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 106,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:44.690Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-clicks-on-the-first-of-page-elements-lo-ce0d406a1c.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 17,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:44.817Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-the-text-of-page-elements--49974db3bb.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:08:44.662Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:08:44.255Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 154,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:08:44.254Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 154,
                "column": 16
              }
            },
            {
              "name": "Tess deselects [ 'First', 'Second' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 310,
              "children": [
                {
                  "name": "Tess iterates over [ 'First', 'Second' ]",
                  "outcome": "SUCCESS",
                  "duration": 300,
                  "children": [
                    {
                      "name": "Tess deselects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 128,
                      "children": [
                        {
                          "name": "Tess clicks on deselect button of the first of page elements located by deep css ('.dropdown-selected-option') of input field where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 77,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:44.901Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 101,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-clicks-on-deselect-button-of-the-first--a208d22e04.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does not contain \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 10,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:44.999Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-the-text-of-page-elements--a208d22e04.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:08:44.900Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 83,
                        "column": 52
                      }
                    },
                    {
                      "name": "Tess deselects 'Second' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 121,
                      "children": [
                        {
                          "name": "Tess clicks on deselect button of the first of page elements located by deep css ('.dropdown-selected-option') of input field where Text does include \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 75,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:45.054Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 101,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-clicks-on-deselect-button-of-the-first--8a730e94fd.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does not contain \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 5,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:45.150Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-the-text-of-page-elements--8a730e94fd.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:08:45.054Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 83,
                        "column": 52
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:08:44.885Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 159,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:08:44.885Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 159,
                "column": 16
              }
            },
            {
              "name": "Tess ensures that <<selected options>>.length does equal 0",
              "outcome": "SUCCESS",
              "duration": 9,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T11:08:45.211Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 161,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-0-does-equal-0-8a730e94fd.png",
                  "type": "screenshot"
                }
              ]
            },
            {
              "name": "Tess ensures that placeholder of dropdown does equal \"Select option\"",
              "outcome": "SUCCESS",
              "duration": 6,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T11:08:45.253Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 162,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-placeholder-of-dropdown-do-8a730e94fd.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        },
        {
          "outcome": "SUCCESS",
          "run": "1146",
          "timestamp": "2026-08-20T11:10:24.429Z",
          "duration": 1275,
          "activities": [
            {
              "name": "Tess selects [ 'First', 'Second' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 636,
              "children": [
                {
                  "name": "Tess iterates over [ 'First', 'Second' ]",
                  "outcome": "SUCCESS",
                  "duration": 624,
                  "children": [
                    {
                      "name": "Tess selects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 354,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 187,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 176,
                              "children": [
                                {
                                  "name": "Tess clicks on input field",
                                  "outcome": "SUCCESS",
                                  "duration": 72,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-20T11:10:36.732Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 110,
                                    "column": 27
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-clicks-on-input-field-b029cbc9ff.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                },
                                {
                                  "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                                  "outcome": "SUCCESS",
                                  "duration": 30,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-20T11:10:36.825Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 92,
                                    "column": 26
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-waits-until-page-element-located-by-dee-2d03a55872.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                }
                              ],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:10:36.700Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:36.700Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 103,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:36.899Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-clicks-on-the-first-of-page-elements-lo-acab3a7760.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 9,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:37.023Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-the-text-of-page-elements--9ecf9c3673.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:36.699Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    },
                    {
                      "name": "Tess selects 'Second' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 202,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 18,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 7,
                              "children": [],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:10:37.090Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:37.089Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 117,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:37.118Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-clicks-on-the-first-of-page-elements-lo-463209c15b.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 13,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:37.256Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-the-text-of-page-elements--2aa067c765.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:37.088Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:36.676Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 154,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:10:36.675Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 154,
                "column": 16
              }
            },
            {
              "name": "Tess deselects [ 'First', 'Second' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 339,
              "children": [
                {
                  "name": "Tess iterates over [ 'First', 'Second' ]",
                  "outcome": "SUCCESS",
                  "duration": 327,
                  "children": [
                    {
                      "name": "Tess deselects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 131,
                      "children": [
                        {
                          "name": "Tess clicks on deselect button of the first of page elements located by deep css ('.dropdown-selected-option') of input field where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 78,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:37.339Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 101,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-clicks-on-deselect-button-of-the-first--a208d22e04.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does not contain \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 11,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:37.438Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-the-text-of-page-elements--a208d22e04.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:37.338Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 83,
                        "column": 52
                      }
                    },
                    {
                      "name": "Tess deselects 'Second' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 144,
                      "children": [
                        {
                          "name": "Tess clicks on deselect button of the first of page elements located by deep css ('.dropdown-selected-option') of input field where Text does include \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 89,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:37.495Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 101,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-clicks-on-deselect-button-of-the-first--8a730e94fd.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does not contain \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 4,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:37.605Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-the-text-of-page-elements--8a730e94fd.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:37.495Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 83,
                        "column": 52
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:37.322Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 159,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:10:37.321Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 159,
                "column": 16
              }
            },
            {
              "name": "Tess ensures that <<selected options>>.length does equal 0",
              "outcome": "SUCCESS",
              "duration": 13,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T11:10:37.676Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 161,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-0-does-equal-0-8a730e94fd.png",
                  "type": "screenshot"
                }
              ]
            },
            {
              "name": "Tess ensures that placeholder of dropdown does equal \"Select option\"",
              "outcome": "SUCCESS",
              "duration": 7,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T11:10:37.722Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 162,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-firefox-153-0-tess-ensures-that-placeholder-of-dropdown-do-8a730e94fd.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        }
      ],
      "cast": [
        {
          "name": "Tess",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://localhost:3100\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        }
      ]
    },
    {
      "name": "goes back to showing the placeholder when all the selected options get deselected",
      "category": "Dropdown",
      "outcome": "SUCCESS",
      "duration": 2904,
      "startedAt": "2026-08-20T11:10:47.773Z",
      "source": {
        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
        "line": 139
      },
      "tags": [
        {
          "type": "theme",
          "name": "Components"
        },
        {
          "type": "capability",
          "name": "Dropdown"
        },
        {
          "type": "feature",
          "name": "Dropdown"
        },
        {
          "type": "project",
          "name": "webkit"
        },
        {
          "type": "platform",
          "name": "Linux 6.17.0-1022-azure"
        },
        {
          "type": "browser",
          "name": "webkit 26.5"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-ct-web-components-template"
        }
      ],
      "activities": [
        {
          "name": "Tess selects [ 'First', 'Second' ] from dropdown",
          "outcome": "SUCCESS",
          "duration": 1518,
          "children": [
            {
              "name": "Tess iterates over [ 'First', 'Second' ]",
              "outcome": "SUCCESS",
              "duration": 1506,
              "children": [
                {
                  "name": "Tess selects 'First' from dropdown",
                  "outcome": "SUCCESS",
                  "duration": 987,
                  "children": [
                    {
                      "name": "Tess opens the dropdown",
                      "outcome": "SUCCESS",
                      "duration": 518,
                      "children": [
                        {
                          "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                          "outcome": "SUCCESS",
                          "duration": 508,
                          "children": [
                            {
                              "name": "Tess clicks on input field",
                              "outcome": "SUCCESS",
                              "duration": 69,
                              "children": [],
                              "type": "Interaction",
                              "startedAt": "2026-08-20T11:10:47.934Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 110,
                                "column": 27
                              },
                              "artifacts": [
                                {
                                  "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-clicks-on-input-field-bea7f7b144.png",
                                  "type": "screenshot"
                                }
                              ]
                            },
                            {
                              "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                              "outcome": "SUCCESS",
                              "duration": 41,
                              "children": [],
                              "type": "Interaction",
                              "startedAt": "2026-08-20T11:10:48.167Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              },
                              "artifacts": [
                                {
                                  "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-waits-until-page-element-located-by-deep--95c3a24056.png",
                                  "type": "screenshot"
                                }
                              ]
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:47.910Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:47.910Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 92,
                        "column": 26
                      }
                    },
                    {
                      "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"First\"",
                      "outcome": "SUCCESS",
                      "duration": 121,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:48.440Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 93,
                        "column": 23
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-clicks-on-the-first-of-page-elements-loca-efccbf4739.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"First\"",
                      "outcome": "SUCCESS",
                      "duration": 8,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:48.725Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                        "line": 60,
                        "column": 13
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-the-text-of-page-elements-lo-efccbf4739.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:47.909Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                    "line": 72,
                    "column": 50
                  }
                },
                {
                  "name": "Tess selects 'Second' from dropdown",
                  "outcome": "SUCCESS",
                  "duration": 447,
                  "children": [
                    {
                      "name": "Tess opens the dropdown",
                      "outcome": "SUCCESS",
                      "duration": 17,
                      "children": [
                        {
                          "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                          "outcome": "SUCCESS",
                          "duration": 7,
                          "children": [],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:48.933Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:48.933Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 92,
                        "column": 26
                      }
                    },
                    {
                      "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Second\"",
                      "outcome": "SUCCESS",
                      "duration": 82,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:48.961Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 93,
                        "column": 23
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-clicks-on-the-first-of-page-elements-loca-f563318c6d.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Second\"",
                      "outcome": "SUCCESS",
                      "duration": 11,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:49.206Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                        "line": 60,
                        "column": 13
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-the-text-of-page-elements-lo-f563318c6d.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:48.932Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                    "line": 72,
                    "column": 50
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:10:47.883Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 154,
                "column": 16
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T11:10:47.882Z",
          "location": {
            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
            "line": 154,
            "column": 16
          }
        },
        {
          "name": "Tess deselects [ 'First', 'Second' ] from dropdown",
          "outcome": "SUCCESS",
          "duration": 881,
          "children": [
            {
              "name": "Tess iterates over [ 'First', 'Second' ]",
              "outcome": "SUCCESS",
              "duration": 871,
              "children": [
                {
                  "name": "Tess deselects 'First' from dropdown",
                  "outcome": "SUCCESS",
                  "duration": 420,
                  "children": [
                    {
                      "name": "Tess clicks on deselect button of the first of page elements located by deep css ('.dropdown-selected-option') of input field where Text does include \"First\"",
                      "outcome": "SUCCESS",
                      "duration": 82,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:49.427Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 101,
                        "column": 23
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-clicks-on-deselect-button-of-the-first-of-9b303aaa7e.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does not contain \"First\"",
                      "outcome": "SUCCESS",
                      "duration": 10,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:49.674Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                        "line": 60,
                        "column": 13
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-the-text-of-page-elements-lo-9b303aaa7e.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:49.426Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                    "line": 83,
                    "column": 52
                  }
                },
                {
                  "name": "Tess deselects 'Second' from dropdown",
                  "outcome": "SUCCESS",
                  "duration": 401,
                  "children": [
                    {
                      "name": "Tess clicks on deselect button of the first of page elements located by deep css ('.dropdown-selected-option') of input field where Text does include \"Second\"",
                      "outcome": "SUCCESS",
                      "duration": 71,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:49.872Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 101,
                        "column": 23
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-clicks-on-deselect-button-of-the-first-of-e887291e77.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does not contain \"Second\"",
                      "outcome": "SUCCESS",
                      "duration": 3,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T11:10:50.107Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                        "line": 60,
                        "column": 13
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-the-text-of-page-elements-lo-e887291e77.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:49.871Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                    "line": 83,
                    "column": 52
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:10:49.411Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 159,
                "column": 16
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T11:10:49.411Z",
          "location": {
            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
            "line": 159,
            "column": 16
          }
        },
        {
          "name": "Tess ensures that <<selected options>>.length does equal 0",
          "outcome": "SUCCESS",
          "duration": 8,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T11:10:50.308Z",
          "location": {
            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
            "line": 161,
            "column": 20
          },
          "artifacts": [
            {
              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-0-does-equal-0-e887291e77.png",
              "type": "screenshot"
            }
          ]
        },
        {
          "name": "Tess ensures that placeholder of dropdown does equal \"Select option\"",
          "outcome": "SUCCESS",
          "duration": 6,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T11:10:50.478Z",
          "location": {
            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
            "line": 162,
            "column": 20
          },
          "artifacts": [
            {
              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-placeholder-of-dropdown-does-e887291e77.png",
              "type": "screenshot"
            }
          ]
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "1140",
          "timestamp": "2026-08-18T23:07:06.992Z",
          "duration": 2862,
          "activities": [
            {
              "name": "Tess selects [ 'First', 'Second' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 1484,
              "children": [
                {
                  "name": "Tess iterates over [ 'First', 'Second' ]",
                  "outcome": "SUCCESS",
                  "duration": 1474,
                  "children": [
                    {
                      "name": "Tess selects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 957,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 512,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 502,
                              "children": [
                                {
                                  "name": "Tess clicks on input field",
                                  "outcome": "SUCCESS",
                                  "duration": 77,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-18T23:07:30.209Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 110,
                                    "column": 27
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-webkit-26-5-tess-clicks-on-input-field-bea7f7b144.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                },
                                {
                                  "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                                  "outcome": "SUCCESS",
                                  "duration": 31,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-18T23:07:30.449Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 92,
                                    "column": 26
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-webkit-26-5-tess-waits-until-page-element-located-by-deep--0c2036b163.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                }
                              ],
                              "type": "Task",
                              "startedAt": "2026-08-18T23:07:30.186Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-18T23:07:30.186Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 100,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:30.711Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-webkit-26-5-tess-clicks-on-the-first-of-page-elements-loca-efccbf4739.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 6,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:30.974Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-webkit-26-5-tess-ensures-that-the-text-of-page-elements-lo-efccbf4739.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-18T23:07:30.185Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    },
                    {
                      "name": "Tess selects 'Second' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 446,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 17,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 6,
                              "children": [],
                              "type": "Task",
                              "startedAt": "2026-08-18T23:07:31.178Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-18T23:07:31.177Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 82,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:31.205Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-webkit-26-5-tess-clicks-on-the-first-of-page-elements-loca-f563318c6d.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 12,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:31.450Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-webkit-26-5-tess-ensures-that-the-text-of-page-elements-lo-f563318c6d.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-18T23:07:31.177Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-18T23:07:30.160Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 154,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-18T23:07:30.160Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 154,
                "column": 16
              }
            },
            {
              "name": "Tess deselects [ 'First', 'Second' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 882,
              "children": [
                {
                  "name": "Tess iterates over [ 'First', 'Second' ]",
                  "outcome": "SUCCESS",
                  "duration": 871,
                  "children": [
                    {
                      "name": "Tess deselects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 415,
                      "children": [
                        {
                          "name": "Tess clicks on deselect button of the first of page elements located by deep css ('.dropdown-selected-option') of input field where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 84,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:31.670Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 101,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-webkit-26-5-tess-clicks-on-deselect-button-of-the-first-of-9b303aaa7e.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does not contain \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 6,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:31.917Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-webkit-26-5-tess-ensures-that-the-text-of-page-elements-lo-9b303aaa7e.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-18T23:07:31.670Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 83,
                        "column": 52
                      }
                    },
                    {
                      "name": "Tess deselects 'Second' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 406,
                      "children": [
                        {
                          "name": "Tess clicks on deselect button of the first of page elements located by deep css ('.dropdown-selected-option') of input field where Text does include \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 76,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:32.111Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 101,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-webkit-26-5-tess-clicks-on-deselect-button-of-the-first-of-e887291e77.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does not contain \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 5,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-18T23:07:32.349Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-webkit-26-5-tess-ensures-that-the-text-of-page-elements-lo-e887291e77.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-18T23:07:32.110Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 83,
                        "column": 52
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-18T23:07:31.655Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 159,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-18T23:07:31.654Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 159,
                "column": 16
              }
            },
            {
              "name": "Tess ensures that <<selected options>>.length does equal 0",
              "outcome": "SUCCESS",
              "duration": 7,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-18T23:07:32.552Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 161,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-webkit-26-5-tess-ensures-that-0-does-equal-0-e887291e77.png",
                  "type": "screenshot"
                }
              ]
            },
            {
              "name": "Tess ensures that placeholder of dropdown does equal \"Select option\"",
              "outcome": "SUCCESS",
              "duration": 6,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-18T23:07:32.721Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 162,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1140/serenity-js-playwright-ct-web-components-template-2/screenshot-linux-webkit-26-5-tess-ensures-that-placeholder-of-dropdown-does-e887291e77.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        },
        {
          "outcome": "SUCCESS",
          "run": "1144",
          "timestamp": "2026-08-20T11:08:32.384Z",
          "duration": 2861,
          "activities": [
            {
              "name": "Tess selects [ 'First', 'Second' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 1478,
              "children": [
                {
                  "name": "Tess iterates over [ 'First', 'Second' ]",
                  "outcome": "SUCCESS",
                  "duration": 1466,
                  "children": [
                    {
                      "name": "Tess selects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 950,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 500,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 489,
                              "children": [
                                {
                                  "name": "Tess clicks on input field",
                                  "outcome": "SUCCESS",
                                  "duration": 73,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-20T11:08:55.241Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 110,
                                    "column": 27
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-clicks-on-input-field-bea7f7b144.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                },
                                {
                                  "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                                  "outcome": "SUCCESS",
                                  "duration": 38,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-20T11:08:55.478Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 92,
                                    "column": 26
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-waits-until-page-element-located-by-deep--c801aab9ef.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                }
                              ],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:08:55.219Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:08:55.219Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 105,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:55.730Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-clicks-on-the-first-of-page-elements-loca-efccbf4739.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 7,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:55.998Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-the-text-of-page-elements-lo-efccbf4739.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:08:55.218Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    },
                    {
                      "name": "Tess selects 'Second' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 451,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 17,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 6,
                              "children": [],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:08:56.201Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:08:56.200Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 89,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:56.228Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-clicks-on-the-first-of-page-elements-loca-f563318c6d.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 10,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:56.480Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-the-text-of-page-elements-lo-f563318c6d.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:08:56.200Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:08:55.195Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 154,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:08:55.194Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 154,
                "column": 16
              }
            },
            {
              "name": "Tess deselects [ 'First', 'Second' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 887,
              "children": [
                {
                  "name": "Tess iterates over [ 'First', 'Second' ]",
                  "outcome": "SUCCESS",
                  "duration": 876,
                  "children": [
                    {
                      "name": "Tess deselects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 419,
                      "children": [
                        {
                          "name": "Tess clicks on deselect button of the first of page elements located by deep css ('.dropdown-selected-option') of input field where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 86,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:56.698Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 101,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-clicks-on-deselect-button-of-the-first-of-9b303aaa7e.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does not contain \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 7,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:56.947Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-the-text-of-page-elements-lo-9b303aaa7e.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:08:56.698Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 83,
                        "column": 52
                      }
                    },
                    {
                      "name": "Tess deselects 'Second' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 407,
                      "children": [
                        {
                          "name": "Tess clicks on deselect button of the first of page elements located by deep css ('.dropdown-selected-option') of input field where Text does include \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 75,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:57.143Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 101,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-clicks-on-deselect-button-of-the-first-of-e887291e77.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does not contain \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 4,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:08:57.382Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-the-text-of-page-elements-lo-e887291e77.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:08:57.142Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 83,
                        "column": 52
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:08:56.683Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 159,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:08:56.682Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 159,
                "column": 16
              }
            },
            {
              "name": "Tess ensures that <<selected options>>.length does equal 0",
              "outcome": "SUCCESS",
              "duration": 9,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T11:08:57.585Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 161,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-0-does-equal-0-e887291e77.png",
                  "type": "screenshot"
                }
              ]
            },
            {
              "name": "Tess ensures that placeholder of dropdown does equal \"Select option\"",
              "outcome": "SUCCESS",
              "duration": 6,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T11:08:57.756Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 162,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1144/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-placeholder-of-dropdown-does-e887291e77.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        },
        {
          "outcome": "SUCCESS",
          "run": "1146",
          "timestamp": "2026-08-20T11:10:24.429Z",
          "duration": 2904,
          "activities": [
            {
              "name": "Tess selects [ 'First', 'Second' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 1518,
              "children": [
                {
                  "name": "Tess iterates over [ 'First', 'Second' ]",
                  "outcome": "SUCCESS",
                  "duration": 1506,
                  "children": [
                    {
                      "name": "Tess selects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 987,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 518,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 508,
                              "children": [
                                {
                                  "name": "Tess clicks on input field",
                                  "outcome": "SUCCESS",
                                  "duration": 69,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-20T11:10:47.934Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 110,
                                    "column": 27
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-clicks-on-input-field-bea7f7b144.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                },
                                {
                                  "name": "Tess waits until page element located by deep css ('.dropdown-available-options') does become visible",
                                  "outcome": "SUCCESS",
                                  "duration": 41,
                                  "children": [],
                                  "type": "Interaction",
                                  "startedAt": "2026-08-20T11:10:48.167Z",
                                  "location": {
                                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                    "line": 92,
                                    "column": 26
                                  },
                                  "artifacts": [
                                    {
                                      "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-waits-until-page-element-located-by-deep--95c3a24056.png",
                                      "type": "screenshot"
                                    }
                                  ]
                                }
                              ],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:10:47.910Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:47.910Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 121,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:48.440Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-clicks-on-the-first-of-page-elements-loca-efccbf4739.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 8,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:48.725Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-the-text-of-page-elements-lo-efccbf4739.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:47.909Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    },
                    {
                      "name": "Tess selects 'Second' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 447,
                      "children": [
                        {
                          "name": "Tess opens the dropdown",
                          "outcome": "SUCCESS",
                          "duration": 17,
                          "children": [
                            {
                              "name": "Tess checks whether CSS classes of widget of dropdown does not contain \"dropdown-expanded\"",
                              "outcome": "SUCCESS",
                              "duration": 7,
                              "children": [],
                              "type": "Task",
                              "startedAt": "2026-08-20T11:10:48.933Z",
                              "location": {
                                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                                "line": 92,
                                "column": 26
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T11:10:48.933Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 92,
                            "column": 26
                          }
                        },
                        {
                          "name": "Tess clicks on the first of page elements located by deep css ('.dropdown-available-option') of page element located by deep css ('.dropdown-available-options') where Text does include \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 82,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:48.961Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 93,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-clicks-on-the-first-of-page-elements-loca-f563318c6d.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does contain at least one item that does start with \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 11,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:49.206Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-the-text-of-page-elements-lo-f563318c6d.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:48.932Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 72,
                        "column": 50
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:47.883Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 154,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:10:47.882Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 154,
                "column": 16
              }
            },
            {
              "name": "Tess deselects [ 'First', 'Second' ] from dropdown",
              "outcome": "SUCCESS",
              "duration": 881,
              "children": [
                {
                  "name": "Tess iterates over [ 'First', 'Second' ]",
                  "outcome": "SUCCESS",
                  "duration": 871,
                  "children": [
                    {
                      "name": "Tess deselects 'First' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 420,
                      "children": [
                        {
                          "name": "Tess clicks on deselect button of the first of page elements located by deep css ('.dropdown-selected-option') of input field where Text does include \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 82,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:49.427Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 101,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-clicks-on-deselect-button-of-the-first-of-9b303aaa7e.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does not contain \"First\"",
                          "outcome": "SUCCESS",
                          "duration": 10,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:49.674Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-the-text-of-page-elements-lo-9b303aaa7e.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:49.426Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 83,
                        "column": 52
                      }
                    },
                    {
                      "name": "Tess deselects 'Second' from dropdown",
                      "outcome": "SUCCESS",
                      "duration": 401,
                      "children": [
                        {
                          "name": "Tess clicks on deselect button of the first of page elements located by deep css ('.dropdown-selected-option') of input field where Text does include \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 71,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:49.872Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                            "line": 101,
                            "column": 23
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-clicks-on-deselect-button-of-the-first-of-e887291e77.png",
                              "type": "screenshot"
                            }
                          ]
                        },
                        {
                          "name": "Tess ensures that the text of page elements located by deep css ('.dropdown-selected-option') of input field does not contain \"Second\"",
                          "outcome": "SUCCESS",
                          "duration": 3,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-08-20T11:10:50.107Z",
                          "location": {
                            "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts",
                            "line": 60,
                            "column": 13
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-the-text-of-page-elements-lo-e887291e77.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T11:10:49.871Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.serenity.ts",
                        "line": 83,
                        "column": 52
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T11:10:49.411Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                    "line": 159,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T11:10:49.411Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 159,
                "column": 16
              }
            },
            {
              "name": "Tess ensures that <<selected options>>.length does equal 0",
              "outcome": "SUCCESS",
              "duration": 8,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T11:10:50.308Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 161,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-0-does-equal-0-e887291e77.png",
                  "type": "screenshot"
                }
              ]
            },
            {
              "name": "Tess ensures that placeholder of dropdown does equal \"Select option\"",
              "outcome": "SUCCESS",
              "duration": 6,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T11:10:50.478Z",
              "location": {
                "path": "/__w/serenity-js-playwright-ct-web-components-template/serenity-js-playwright-ct-web-components-template/src/components/Dropdown/Dropdown.spec.ts",
                "line": 162,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/1146/serenity-js-playwright-ct-web-components-template-1/screenshot-linux-webkit-26-5-tess-ensures-that-placeholder-of-dropdown-does-e887291e77.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        }
      ],
      "cast": [
        {
          "name": "Tess",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://localhost:3100\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        }
      ]
    }
  ],
  "history": [
    {
      "timestamp": "2026-08-18T23:07:06.992Z",
      "duration": 25926,
      "outcomes": {
        "passed": 18,
        "failed": 0,
        "pending": 0,
        "skipped": 0,
        "compromised": 0,
        "error": 0
      },
      "label": "1140",
      "slowest": 2862,
      "fastest": 396,
      "average": 1239,
      "commit": "97f3bc1e90c216f5655b928ca00950d55e55125d",
      "branch": "main",
      "ciJobUrl": "https://github.com/serenity-js/serenity-js-playwright-ct-web-components-template/actions/runs/32195422192",
      "repositoryUrl": "https://github.com/serenity-js/serenity-js-playwright-ct-web-components-template",
      "score": {
        "confidence": 100,
        "passRate": 100,
        "consistency": 100,
        "completeness": 100
      }
    },
    {
      "timestamp": "2026-08-20T11:08:32.384Z",
      "duration": 25568,
      "outcomes": {
        "passed": 18,
        "failed": 0,
        "pending": 0,
        "skipped": 0,
        "compromised": 0,
        "error": 0
      },
      "label": "1144",
      "slowest": 2861,
      "fastest": 381,
      "average": 1226,
      "commit": "eedf5ffaa044d1c2b81547e8340737ec83ca4757",
      "branch": "main",
      "ciJobUrl": "https://github.com/serenity-js/serenity-js-playwright-ct-web-components-template/actions/runs/32362273425",
      "repositoryUrl": "https://github.com/serenity-js/serenity-js-playwright-ct-web-components-template",
      "score": {
        "confidence": 100,
        "passRate": 100,
        "consistency": 100,
        "completeness": 100
      }
    },
    {
      "timestamp": "2026-08-20T11:10:24.429Z",
      "duration": 26248,
      "outcomes": {
        "passed": 18,
        "failed": 0,
        "pending": 0,
        "skipped": 0,
        "compromised": 0,
        "error": 0
      },
      "label": "1146",
      "slowest": 2904,
      "fastest": 410,
      "average": 1256,
      "commit": "90e621330e53964734f44f0a84a75bd9fa240049",
      "branch": "main",
      "ciJobUrl": "https://github.com/serenity-js/serenity-js-playwright-ct-web-components-template/actions/runs/32362405480",
      "repositoryUrl": "https://github.com/serenity-js/serenity-js-playwright-ct-web-components-template",
      "score": {
        "confidence": 100,
        "passRate": 100,
        "consistency": 100,
        "completeness": 100
      }
    }
  ],
  "tags": [
    {
      "type": "theme",
      "name": "Components",
      "scenarioCount": 18,
      "passed": 18,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "capability",
      "name": "Dropdown",
      "scenarioCount": 18,
      "passed": 18,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "feature",
      "name": "Dropdown",
      "scenarioCount": 18,
      "passed": 18,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "project",
      "name": "chromium",
      "scenarioCount": 6,
      "passed": 6,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "platform",
      "name": "Linux 6.17.0-1022-azure",
      "scenarioCount": 18,
      "passed": 18,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "browser",
      "name": "chromium 151.0.7922.34",
      "scenarioCount": 6,
      "passed": 6,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "module",
      "name": "serenity-js-playwright-ct-web-components-template",
      "scenarioCount": 18,
      "passed": 18,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "project",
      "name": "firefox",
      "scenarioCount": 6,
      "passed": 6,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "browser",
      "name": "firefox 153.0",
      "scenarioCount": 6,
      "passed": 6,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "project",
      "name": "webkit",
      "scenarioCount": 6,
      "passed": 6,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "browser",
      "name": "webkit 26.5",
      "scenarioCount": 6,
      "passed": 6,
      "failed": 0,
      "skipped": 0
    }
  ],
  "inconsistentTests": [],
  "newFailures": [],
  "newPasses": [],
  "systemContext": {
    "nodeVersion": "v24.19.0",
    "os": {
      "name": "linux",
      "version": "6.17.0-1022-azure",
      "arch": "x64"
    },
    "serenityVersion": "3.45.8",
    "testRunner": {
      "name": "Playwright",
      "version": "1.62.1"
    },
    "browsers": [
      {
        "name": "chromium",
        "version": "151.0.7922.34"
      },
      {
        "name": "firefox",
        "version": "153.0"
      },
      {
        "name": "webkit",
        "version": "26.5"
      }
    ],
    "ci": {
      "provider": "GitHub Actions",
      "buildNumber": "1146",
      "branch": "main",
      "commit": "90e621330e53964734f44f0a84a75bd9fa240049",
      "commitMessage": "Merge pull request #321 from serenity-js/docs/add-documentation-links",
      "commitAuthor": "Jan Molak",
      "jobUrl": "https://github.com/serenity-js/serenity-js-playwright-ct-web-components-template/actions/runs/32362405480",
      "workflow": "build",
      "repositoryUrl": "https://github.com/serenity-js/serenity-js-playwright-ct-web-components-template",
      "triggeredBy": "jan-molak"
    },
    "projectName": "@serenity-js/serenity-js-playwright-ct-react-template",
    "packageManager": "npm"
  },
  "capabilities": {
    "type": "directory",
    "name": "src",
    "outcomes": {
      "passed": 18,
      "failed": 0,
      "pending": 0,
      "skipped": 0,
      "compromised": 0,
      "error": 0
    },
    "scenarioCount": 18,
    "children": [
      {
        "type": "directory",
        "name": "components",
        "outcomes": {
          "passed": 18,
          "failed": 0,
          "pending": 0,
          "skipped": 0,
          "compromised": 0,
          "error": 0
        },
        "scenarioCount": 18,
        "children": [
          {
            "type": "directory",
            "name": "Dropdown",
            "outcomes": {
              "passed": 18,
              "failed": 0,
              "pending": 0,
              "skipped": 0,
              "compromised": 0,
              "error": 0
            },
            "scenarioCount": 18,
            "children": [
              {
                "type": "file",
                "name": "Dropdown",
                "outcomes": {
                  "passed": 18,
                  "failed": 0,
                  "pending": 0,
                  "skipped": 0,
                  "compromised": 0,
                  "error": 0
                },
                "scenarioCount": 18,
                "scenarios": [
                  {
                    "name": "shows the placeholder when no option is selected yet",
                    "outcome": "SUCCESS",
                    "executionHistory": [
                      "SUCCESS",
                      "SUCCESS",
                      "SUCCESS"
                    ]
                  },
                  {
                    "name": "shows the placeholder when no option is selected yet",
                    "outcome": "SUCCESS",
                    "executionHistory": [
                      "SUCCESS",
                      "SUCCESS",
                      "SUCCESS"
                    ]
                  },
                  {
                    "name": "shows the placeholder when no option is selected yet",
                    "outcome": "SUCCESS",
                    "executionHistory": [
                      "SUCCESS",
                      "SUCCESS",
                      "SUCCESS"
                    ]
                  },
                  {
                    "name": "shows the available options when the menu is expanded",
                    "outcome": "SUCCESS",
                    "executionHistory": [
                      "SUCCESS",
                      "SUCCESS",
                      "SUCCESS"
                    ]
                  },
                  {
                    "name": "shows the available options when the menu is expanded",
                    "outcome": "SUCCESS",
                    "executionHistory": [
                      "SUCCESS",
                      "SUCCESS",
                      "SUCCESS"
                    ]
                  },
                  {
                    "name": "shows the available options when the menu is expanded",
                    "outcome": "SUCCESS",
                    "executionHistory": [
                      "SUCCESS",
                      "SUCCESS",
                      "SUCCESS"
                    ]
                  },
                  {
                    "name": "selects the desired options",
                    "outcome": "SUCCESS",
                    "executionHistory": [
                      "SUCCESS",
                      "SUCCESS",
                      "SUCCESS"
                    ]
                  },
                  {
                    "name": "selects the desired options",
                    "outcome": "SUCCESS",
                    "executionHistory": [
                      "SUCCESS",
                      "SUCCESS",
                      "SUCCESS"
                    ]
                  },
                  {
                    "name": "selects the desired options",
                    "outcome": "SUCCESS",
                    "executionHistory": [
                      "SUCCESS",
                      "SUCCESS",
                      "SUCCESS"
                    ]
                  },
                  {
                    "name": "triggers onChange with selected options",
                    "outcome": "SUCCESS",
                    "executionHistory": [
                      "SUCCESS",
                      "SUCCESS",
                      "SUCCESS"
                    ]
                  },
                  {
                    "name": "triggers onChange with selected options",
                    "outcome": "SUCCESS",
                    "executionHistory": [
                      "SUCCESS",
                      "SUCCESS",
                      "SUCCESS"
                    ]
                  },
                  {
                    "name": "triggers onChange with selected options",
                    "outcome": "SUCCESS",
                    "executionHistory": [
                      "SUCCESS",
                      "SUCCESS",
                      "SUCCESS"
                    ]
                  },
                  {
                    "name": "allows for selected options to be deselected",
                    "outcome": "SUCCESS",
                    "executionHistory": [
                      "SUCCESS",
                      "SUCCESS",
                      "SUCCESS"
                    ]
                  },
                  {
                    "name": "allows for selected options to be deselected",
                    "outcome": "SUCCESS",
                    "executionHistory": [
                      "SUCCESS",
                      "SUCCESS",
                      "SUCCESS"
                    ]
                  },
                  {
                    "name": "allows for selected options to be deselected",
                    "outcome": "SUCCESS",
                    "executionHistory": [
                      "SUCCESS",
                      "SUCCESS",
                      "SUCCESS"
                    ]
                  },
                  {
                    "name": "goes back to showing the placeholder when all the selected options get deselected",
                    "outcome": "SUCCESS",
                    "executionHistory": [
                      "SUCCESS",
                      "SUCCESS",
                      "SUCCESS"
                    ]
                  },
                  {
                    "name": "goes back to showing the placeholder when all the selected options get deselected",
                    "outcome": "SUCCESS",
                    "executionHistory": [
                      "SUCCESS",
                      "SUCCESS",
                      "SUCCESS"
                    ]
                  },
                  {
                    "name": "goes back to showing the placeholder when all the selected options get deselected",
                    "outcome": "SUCCESS",
                    "executionHistory": [
                      "SUCCESS",
                      "SUCCESS",
                      "SUCCESS"
                    ]
                  }
                ],
                "score": {
                  "confidence": 100,
                  "passRate": 100,
                  "completeness": 100,
                  "consistency": 100
                }
              }
            ],
            "score": {
              "confidence": 100,
              "passRate": 100,
              "completeness": 100,
              "consistency": 100
            }
          }
        ],
        "score": {
          "confidence": 100,
          "passRate": 100,
          "completeness": 100,
          "consistency": 100
        }
      }
    ],
    "score": {
      "confidence": 100,
      "passRate": 100,
      "completeness": 100,
      "consistency": 100
    }
  },
  "specDirectory": "src"
};

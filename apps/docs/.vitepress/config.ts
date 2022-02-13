import { defineConfigWithTheme } from 'vitepress'
import { ThemeConfig } from 'your-theme'
export default defineConfigWithTheme<ThemeConfig>({
  "lang": "en-US",
  "title": "Test",
  "description": "Vite & Vue powered static site generator.",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/img/linktolink.png"
      }
    ]
  ],
  "themeConfig": {
    "repo": "test",
    "docsDir": "docs",
    "docsBranch": "main",
    "editLinks": true,
    "editLinkText": "Edit this page on GitHub",
    "lastUpdated": "Last Updated",
    "algolia": {
      "appId": "<APP_ID>",
      "apiKey": "<API_KEY>",
      "indexName": "test"
    },
    "carbonAds": {
      "carbon": "<CARBON>",
      "custom": "<CUSTOM>",
      "placement": "<ORG>"
    },
    "nav": [
      {
        "text": "Guide",
        "link": "/",
        "activeMatch": "^/$|^/guide/"
      },
      {
        "text": "Config Reference",
        "link": "/config/basics",
        "activeMatch": "^/config/"
      },
      {
        "text": "Release Notes",
        "link": "https://github.com/<AUTHOR>/test/releases"
      }
    ],
    "sidebar": {
      "/guide/": [
        {
          "text": "Introduction",
          "children": [
            {
              "text": "What is test?",
              "link": "/"
            },
            {
              "text": "Getting Started",
              "link": "/guide/getting-started"
            },
            {
              "text": "Configuration",
              "link": "/guide/configuration"
            },
            {
              "text": "Deploying",
              "link": "/guide/deploy"
            }
          ]
        },
        {
          "text": "Components",
          "children": []
        }
      ],
      "/config/": [
        {
          "text": "App Config",
          "children": [
            {
              "text": "Basics",
              "link": "/config/basics"
            }
          ]
        },
        {
          "text": "Theme Config",
          "children": [
            {
              "text": "Homepage",
              "link": "/config/homepage"
            },
            {
              "text": "Algolia Search",
              "link": "/config/algolia-search"
            },
            {
              "text": "Carbon Ads",
              "link": "/config/carbon-ads"
            }
          ]
        }
      ],
      "/": [
        {
          "text": "Introduction",
          "children": [
            {
              "text": "What is test?",
              "link": "/"
            },
            {
              "text": "Getting Started",
              "link": "/guide/getting-started"
            },
            {
              "text": "Configuration",
              "link": "/guide/configuration"
            },
            {
              "text": "Deploying",
              "link": "/guide/deploy"
            }
          ]
        },
        {
          "text": "Components",
          "children": []
        }
      ]
    }
  }
})
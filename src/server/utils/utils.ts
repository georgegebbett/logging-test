export const sampleData = {
    "id": "0001",
    "type": "donut",
    "name": "Cake",
    "ppu": 0.55,
    "batters":
        {
            "batter":
                [
                    {"id": "1001", "type": "Regular"},
                    {"id": "1002", "type": "Chocolate"},
                    {"id": "1003", "type": "Blueberry"},
                    {"id": "1004", "type": "Devil's Food"}
                ]
        },
    "topping":
        [
            {"id": "5001", "type": "None"},
            {"id": "5002", "type": "Glazed"},
            {"id": "5005", "type": "Sugar"},
            {"id": "5007", "type": "Powdered Sugar"},
            {"id": "5006", "type": "Chocolate with Sprinkles"},
            {"id": "5003", "type": "Chocolate"},
            {"id": "5004", "type": "Maple"}
        ]
} as const

type SD = typeof sampleData

export const apiRequest = async (): Promise<SD> => sampleData

export const failedApiRequest = () => Promise.reject("500 - Internal server error")

export const massiveObject = {
  user: {
    id: 12345,
    name: "John Doe",
    email: "john.doe@example.com",
    preferences: {
      theme: "dark",
      notifications: {
        email: true,
        sms: false,
        push: true
      },
      languages: ["en", "fr", "es"]
    }
  },
  posts: [
    {
      id: 1,
      title: "First Post",
      content: "This is the content of the first post.",
      tags: ["introduction", "welcome"],
      comments: [
        {
          id: 101,
          user: "Jane Smith",
          comment: "Great post!",
          timestamp: "2023-07-27T12:34:56Z"
        },
        {
          id: 102,
          user: "Jim Brown",
          comment: "Thanks for sharing.",
          timestamp: "2023-07-27T13:22:35Z"
        }
      ]
    },
    {
      id: 2,
      title: "Second Post",
      content: "This is the content of the second post.",
      tags: ["update", "news"],
      comments: [
        {
          id: 201,
          user: "Alice Green",
          comment: "Interesting update.",
          timestamp: "2023-07-28T10:15:42Z"
        }
      ]
    }
  ],
  settings: {
    general: {
      siteName: "My Awesome Site",
      siteUrl: "https://example.com"
    },
    security: {
      twoFactorAuth: true,
      allowedIPs: ["192.168.1.1", "10.0.0.1"]
    },
    appearance: {
      logoUrl: "https://example.com/logo.png",
      faviconUrl: "https://example.com/favicon.ico",
      customCSS: ".custom-class { color: red; }"
    }
  },
  logs: [
    {
      timestamp: "2023-07-27T12:00:00Z",
      level: "info",
      message: "Server started."
    },
    {
      timestamp: "2023-07-27T12:05:00Z",
      level: "warn",
      message: "High memory usage detected."
    },
    {
      timestamp: "2023-07-27T12:10:00Z",
      level: "error",
      message: "Unhandled exception occurred.",
      stack: "Error: Unhandled exception\n    at Object.<anonymous> (index.js:10:15)"
    }
  ],
  metrics: {
    users: {
      total: 1050,
      active: 780,
      new: 50
    },
    posts: {
      total: 200,
      new: 10
    },
    comments: {
      total: 500,
      new: 20
    }
  }
}

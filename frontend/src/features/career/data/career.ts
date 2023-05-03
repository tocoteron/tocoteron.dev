import { Career } from '@/features/career/models/Career'

const career: Career = [
  {
    company: {
      name: 'Knowledge Work',
      link: 'https://kwork.studio/',
    },
    jobs: [
      {
        employmentStatus: 'Full-time',
        period: {
          since: {
            year: 2023,
            month: 5,
            day: 1,
          },
        },
        role: 'Software Engineer',
        domains: ['Web backend', 'Infrastructure'],
      },
    ],
  },
  {
    company: {
      name: 'BizReach',
      link: 'https://www.bizreach.co.jp/',
    },
    jobs: [
      {
        employmentStatus: 'Full-time',
        period: {
          since: {
            year: 2022,
            month: 4,
            day: 1,
          },
          until: {
            year: 2023,
            month: 4,
            day: 30,
          },
        },
        role: 'Software Engineer',
        domains: ['Web backend', 'Web frontend', 'Infrastructure'],
      },
      {
        employmentStatus: 'Internship',
        period: {
          since: {
            year: 2020,
            month: 9,
            day: 23,
          },
          until: {
            year: 2020,
            month: 10,
            day: 2,
          },
        },
        role: 'Software Engineer',
        domains: ['Web backend', 'Web frontend'],
      },
    ],
  },
  {
    company: {
      name: 'MonoBundle',
      link: 'https://monobundle.com/',
    },
    jobs: [
      {
        employmentStatus: 'Subcontract',
        period: {
          since: {
            year: 2022,
            month: 2,
            day: 1,
          },
          until: {
            year: 2022,
            month: 11,
            day: 30,
          },
        },
        role: 'Software Engineer',
        domains: ['Web backend', 'Infrastructure', 'Blockchain'],
        notes: [{ text: 'Hokusai', link: 'https://hokusai.app/' }],
      },
      {
        employmentStatus: 'Part-time',
        period: {
          since: {
            year: 2021,
            month: 9,
            day: 1,
          },
          until: {
            year: 2022,
            month: 1,
            day: 31,
          },
        },
        role: 'Software Engineer',
        domains: [
          'Web backend',
          'Web frontend',
          'Infrastructure',
          'Blockchain',
        ],
        notes: [{ text: 'Hokusai', link: 'https://hokusai.app/' }],
      },
    ],
  },
  {
    company: {
      name: 'Progmate',
      link: 'https://biz.progmate.jp/',
    },
    jobs: [
      {
        employmentStatus: 'Part-time',
        period: {
          since: {
            year: 2020,
            month: 12,
            day: 20,
          },
          until: {
            year: 2021,
            month: 9,
            day: 25,
          },
        },
        role: 'Software Engineer',
        domains: ['Mobile', 'iOS app', 'Android app', 'IoT'],
        notes: [],
      },
    ],
  },
  {
    company: {
      name: 'Media Do',
      link: 'https://mediado.jp/',
    },
    jobs: [
      {
        employmentStatus: 'Internship',
        period: {
          since: {
            year: 2020,
            month: 9,
            day: 7,
          },
          until: {
            year: 2020,
            month: 9,
            day: 18,
          },
        },
        role: 'Software Engineer',
        domains: ['Web frontend'],
        notes: [
          {
            text: 'MediaDo Tech Internship',
            link: 'https://techdo.mediado.jp/entry/2020/12/01/090000',
          },
        ],
      },
    ],
  },
  {
    company: {
      name: 'VOYAGE GROUP',
      link: 'https://voyagegroup.com/',
    },
    jobs: [
      {
        employmentStatus: 'Internship',
        period: {
          since: {
            year: 2020,
            month: 8,
            day: 1,
          },
          until: {
            year: 2020,
            month: 8,
            day: 28,
          },
        },
        role: 'Software Engineer',
        domains: ['Web backend', 'Web frontend'],
        notes: [
          {
            text: 'Treasure',
            link: 'https://techlog.voyagegroup.com/entry/2020/09/08/184336',
          },
        ],
      },
    ],
  },
]

export default career

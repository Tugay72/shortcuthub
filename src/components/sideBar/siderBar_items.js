import { CodeOutlined, DesktopOutlined, ToolOutlined, GlobalOutlined, DatabaseOutlined, HomeOutlined, PictureOutlined, FileTextOutlined, EditOutlined } from '@ant-design/icons';
const items = [
    {
        key: 'home',
        label: 'Home',
        icon: <HomeOutlined />,
    },
    {
        key: 'suggest',
        label: 'Suggest New Shortcuts',
        icon: <EditOutlined />,
    },
    {
        type: 'divider',
    },
    {
        key: 'adobe',
        label: 'Adobe Suite',
        icon: <PictureOutlined />,
        children: [
            { key: 'acrobat', label: 'Adobe Acrobat' },
            { key: 'aftereffects', label: 'Adobe After Effects' },
            { key: 'illustrator', label: 'Adobe Illustrator' },
            { key: 'photoshop', label: 'Adobe Photoshop' },
            { key: 'premiere', label: 'Adobe Premiere Pro' }
        ]
    },
    {
        key: 'browsers',
        label: 'Web Browsers',
        icon: <GlobalOutlined />,
        children: [
            { key: 'brave', label: 'Brave' },
            { key: 'chrome', label: 'Google Chrome' },
            { key: 'edge', label: 'Microsoft Edge' },
            { key: 'firefox', label: 'Mozilla Firefox' },
            { key: 'opera', label: 'Opera' },
            { key: 'safari', label: 'Safari' }
        ]
    },
    {
        key: 'database',
        label: 'Databases',
        icon: <DatabaseOutlined />,
        children: [
            { key: 'mongodb', label: 'MongoDB' },
            { key: 'mysql', label: 'MySQL' },
            { key: 'oracle', label: 'Oracle Database' },
            { key: 'postgresql', label: 'PostgreSQL' },
            { key: 'redis', label: 'Redis' },
            { key: 'sqlite', label: 'SQLite' }
        ]
    },
    {
        key: 'ides',
        label: 'IDEs',
        icon: <CodeOutlined />,
        children: [
            { key: 'androidstudio', label: 'Android Studio' },
            { key: 'eclipse', label: 'Eclipse' },
            { key: 'intellij', label: 'IntelliJ IDEA' },
            { key: 'netbeans', label: 'NetBeans' },
            { key: 'pycharm', label: 'PyCharm' },
            { key: 'vscode', label: 'VS Code' },
            { key: 'xcode', label: 'Xcode' }
        ]
    },
    {
        key: 'office',
        label: 'Microsoft Office Suite',
        icon: <FileTextOutlined />,
        children: [
            { key: 'excel', label: 'Microsoft Excel' },
            { key: 'onenote', label: 'Microsoft OneNote' },
            { key: 'outlook', label: 'Microsoft Outlook' },
            { key: 'powerpoint', label: 'Microsoft PowerPoint' },
            { key: 'teams', label: 'Microsoft Teams' },
            { key: 'word', label: 'Microsoft Word' }
        ]
    },
    {
        key: 'os',
        label: 'Operating Systems',
        icon: <DesktopOutlined />,
        children: [
            { key: 'arch', label: 'Arch Linux' },
            { key: 'fedora', label: 'Fedora' },
            { key: 'linux', label: 'Linux' },
            { key: 'macos', label: 'macOS' },
            { key: 'ubuntu', label: 'Ubuntu' },
            { key: 'windows', label: 'Windows' }
        ]
    },
    {
        key: 'tools',
        label: 'Development Tools',
        icon: <ToolOutlined />,
        children: [
            { key: 'docker', label: 'Docker' },
            { key: 'git', label: 'Git' },
            { key: 'npm', label: 'NPM' },
            { key: 'postman', label: 'Postman' },
            { key: 'terminal', label: 'Terminal & CLI' },
            { key: 'webpack', label: 'Webpack' },
            { key: 'yarn', label: 'Yarn' }
        ]
    }
];



export default items;
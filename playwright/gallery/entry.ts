import '../../src/style.css';

const stories = import.meta.glob('../../src/**/*.story.ts');
const id = (f: string) => f.replace(/^(\.\.\/)+src\//, '').replace(/\.story\.\w+$/, '');

async function resolve(storyId: string) {
    const separator = storyId.lastIndexOf('/');
    const [ path, name ] = [ storyId.slice(0, separator), storyId.slice(separator + 1) ];
    const file = Object.keys(stories).find(f => {
        const fileId = id(f);
        return fileId === path
            || fileId.endsWith('/' + path)
            || fileId.startsWith(path + '/');
    });
    const module_ = (file && await stories[file]()) as Record<string, any> | undefined;
    return module_?.[name] ?? module_?.default;
}

const rootElement = document.getElementById('root')!;

(window as any).mount = async ({ story, props }: { story: string; props?: Record<string, any> }) => {
    const storyFn = await resolve(story);
    if (! storyFn) {
        throw new Error(`Unknown story: ${ story }`);
    }
    // Clear previous content
    rootElement.innerHTML = '';
    // Story function returns an HTMLElement — append it to root
    const element = storyFn(props ?? {});
    rootElement.appendChild(element);
};

(window as any).unmount = async () => {
    rootElement.innerHTML = '';
};

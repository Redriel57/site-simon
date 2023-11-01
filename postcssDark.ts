import { Plugin, Root, rule, decl } from 'postcss';

const postcssDarkVariant: Plugin = {
    postcssPlugin: 'postcss-dark-variant',

    Once: (css: Root) => {
        const colors: string[] = ['primary', 'secondary', 'background', 'highlight', 'accent'];

        css.walkRules(ruleInstance => {
            colors.forEach(colorName => {
                const regex = new RegExp(`(?!.*dark:)(.*-${colorName})`);

                const match = ruleInstance.selector.match(regex);
                if (match) {
                    let propertyType = match[1].split('-')[0];

                    let newRule = rule({
                        selector: `.dark ${ruleInstance.selector}`
                    });

                    newRule.append(decl({
                        prop: `${propertyType}-color`,
                        value: `var(--color-${colorName}-dark)`
                    }));

                    ruleInstance.parent?.insertAfter(ruleInstance, newRule);
                }
            });
        });
    }
};

export default postcssDarkVariant;

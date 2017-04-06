/* @flow */

const packageJSON = require('../package.json')

const arePackagesEqual = (packageJSON: Object) => (packageName: string) => {
    const peerDependency = packageJSON.peerDependencies[packageName]
    const devDependency = packageJSON.devDependencies[packageName]

    return peerDependency === devDependency
}

const peerPackageNames = Object.keys(packageJSON.peerDependencies)
const peerDependenciesMatch = peerPackageNames.every(arePackagesEqual(packageJSON))

if (!peerDependenciesMatch) {
    throw new Error('Failure: Make sure you upgrade the peerDependencies')
}

console.log('Success: peerDependencies match devDependencies') // eslint-disable-line no-console

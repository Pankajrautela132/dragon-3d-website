import React, {
    useLayoutEffect,
    useRef,
    useEffect
} from "react";

import {
    useAnimations,
    useGLTF
} from "@react-three/drei";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

export default function World() {

    // const { scene, animations } = useGLTF("/red_dragon.glb");
    const { scene, animations } = useGLTF(`${import.meta.env.BASE_URL}red_dragon.glb`);

    const { actions } = useAnimations(
        animations,
        scene
    );

    const modelRef = useRef();

    const animationNames = [
        "RedDragon_Armature|angryFlightPose",
        "RedDragon_Armature|aura",
        "RedDragon_Armature|flightTest",
    ];


    // ==========================================
    // CHANGE DRAGON ANIMATION
    // ==========================================

    const frame = (index) => {

        const name = animationNames[index];

        const action = actions[name];

        if (!action) {
            console.log("Animation not found:", name);
            return;
        }

        // Stop all animations
        Object.values(actions).forEach((a) => {
            a.stop();
        });

        // Reset selected animation
        action.reset();

        // Play only once
        action.setLoop(THREE.LoopOnce, 1);

        // Stay on final pose
        action.clampWhenFinished = true;

        // Play
        action.fadeIn(0.5);
        action.play();

        console.log("Playing:", name);
    };


    // ==========================================
    // MATERIALS
    // ==========================================

    const materials = [];

    useEffect(() => {

        scene.traverse((child) => {

            if (child.isMesh && child.material) {

                child.material = child.material.clone();

                materials.push(child.material);

            }

        });

    }, [scene]);


    // ==========================================
    // GSAP
    // ==========================================

    useLayoutEffect(() => {

        if (!actions) return;

        const model = modelRef.current;

        const ctx = gsap.context(() => {

            const tl = gsap.timeline({

                scrollTrigger: {
                    trigger: ".show",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 3,
                }

            });


            // ==========================================
            // SECTION 1
            // ==========================================

            tl.call(() => {

                frame(2);

            });


            tl.to(model.position, {

                x: 0,
                y: 11,
                z: 9,
                duration: 1

            });


            tl.to(model.rotation, {

                x: THREE.MathUtils.degToRad(0),
                y: THREE.MathUtils.degToRad(8),
                z: 0,
                duration: 1

            }, "<");


            // ==========================================
            // SECTION 2
            // ==========================================

            tl.to(model.position, {

                x: -0.48,
                y: -2.84,
                z: -0.07,
                duration: 1

            });


            tl.to(model.rotation, {

                x: THREE.MathUtils.degToRad(120),
                y: 0,
                z: THREE.MathUtils.degToRad(150),
                duration: 2

            }, "<");


        });


        return () => {

            ctx.revert();

            Object.values(actions).forEach((action) => {
                action.stop();
            });

        };

    }, [actions]);


    return (

        <primitive

            ref={modelRef}

            object={scene}

            scale={16}

            position={[0, 0, 0]}

            rotation={[
                0,
                THREE.MathUtils.degToRad(45),
                0
            ]}

        />

    );
}